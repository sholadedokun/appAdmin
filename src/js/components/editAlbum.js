import React, {Component} from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import FileUploader from './fileUpload'
import {uploadAlbum, uploadPhotos} from '../actions/albumActions'
import {connect} from 'react-redux'
 class EditAlbum extends Component{
    constructor(){
        super();
        this.state={
            title:'',
            description:'',
            newImages:[
                {data:'', name:'', url:''}
            ],
        }
    }
    componentDidMount(){
        const {allAlbums, match:{params:{id}} }=this.props;
        let album = allAlbums.filter((item)=>item._id==id);
        this.setState({
            title:album[0].title,
            description:album[0].description,
            imagesUrl:album[0].imagesUrl.split(','),
            id
        })
    }
    editPostion(index, url){
        let allImageUrls=this.state.imagesUrl;
        allImageUrls.splice(index, 1)
        if(url){
            allImageUrls.unshift(url);
        }
        this.setState({imagesUrl: allImageUrls})
    }
    processImage(index, action, data){
        let newImages=this.state.newImages;
        if(action==='add'){
            let that=this;
            newImages[index].data=data.target.files[0]
            let reader =new FileReader();
            reader.onload=function (){
                let image= new Image;
                let errorMessage=[]
                image.onload=()=>{
                    if(1048 < (that.state.newImages[index].data.size/1000)){
                        newImages[index].errorMessage=`Image file size can't be more than 2mb. Change or Remove Image`
                    }
                    that.setState({newImages})
                }
                image.src=reader.result;
                newImages[index].src=reader.result
                newImages[index].name=newImages[index].data.name
                that.setState({newImages})
            }
            reader.readAsDataURL(data.target.files[0])
        }
        else{
            if(newImages.length>1){
                newImages.splice(index, 1);
                this.setState({newImages})
            }
        }
    }
    addMoreImages(){
        let newImages=this.state.newImages;
        newImages.push({data:'', name:'', url:''});
        this.setState({newImages})
    }
    prepareUpload(){
        let {imagesUrl, newImages, title, description, id}=this.state;
        let that = this;
        if(newImages[0].data){
            let newImages=this.state.newImages
            let formData = new FormData();
            for(var i=0; i<newImages.length; i++){
                if(!newImages[i].errorMessage){
                    formData.append('file', newImages[i].data);
                }
            }
            this.props.uploadPhotos(formData).then( data=>{
                imagesUrl=[...imagesUrl, ...data];
                albumUpload();
            }

            );
        }
        else{albumUpload()}
        function albumUpload(){
            that.props.uploadAlbum({title, description, imagesUrl:imagesUrl.toString()}, `/${id}`, 'put').then(data=>{
                that.props.history.push('/viewAlbum')
            })
        }

    }
    deleteAlbum(){
        console.log(this.state.id)
    }
    render(){
        const {imagesUrl, newImages}=this.state
        console.log(this.props.match.params.id)
        return(
            <Col md="8" className="centered text-center">
                <div className="step">Upload Photo Album</div>
                    <div className="form-content">
                        <div className="col-md-10 centered">
                            <div className="row">
                                <div className="col-md-12">
                                    <Col xs={12}  className="pl-r">
                                        <div className="form-group">
                                            <label className="text-white" style={{textAlign:"left !important", display:"block"}}>Album Title</label>
                                            <input type="text" className="form-control" placeholder="Album Title"  value={this.state.title} onChange={(e)=>this.setState({title:e.target.value})}  />
                                        </div>
                                    </Col>
                                    <Col xs="12"  className="pl-r">
                                        <div className="form-group">
                                            <label  className="text-white" style={{textAlign:"left !important", display:"block"}}>Album Description</label>
                                            <textarea  className="form-control" placeholder="Album Description"  value={this.state.description}  onChange={(e)=>this.setState({description:e.target.value})}  />
                                        </div>
                                    </Col>
                                    <Col xs="12"  className="pl-r">
                                        <label className="text-white" style={{textAlign:"left !important", display:"block"}}>Uploaded Image</label>
                                        {
                                            imagesUrl?
                                            imagesUrl.map((item, index)=>
                                                <div className="form-group">

                                                    <div className="uploadedImage">
                                                        <img src={`https://berhymes-back.herokuapp.com/public/uploads/specdios/${item}`} width="100%" />
                                                        {index!=0?<a onClick={this.editPostion.bind(this, index, null)}>Delete</a>:''}
                                                        {index!=0?<a onClick={this.editPostion.bind(this, index, item)}>Make Profile</a>:''}
                                                    </div>
                                                </div>
                                            ):''
                                        }
                                    </Col>
                                    {newImages.map((item, index)=>{
                                        return(
                                            <FileUploader
                                                key={index}
                                                imageUrl={item.src}
                                                errorMessage={item.errorMessage}
                                                imageName={item.name}
                                                addImage={this.processImage.bind(this, index, 'add')}
                                                removeImage={this.processImage.bind(this, index, 'sub')}
                                            />
                                        )
                                    })
                                    }
                                    <Col md="12" className="addMore">
                                        <button onClick={this.addMoreImages.bind(this)} className="btn btn-blue">Add More Images</button>
                                    </Col>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="action-btn-container">
                        <button onClick={this.deleteAlbum.bind(this)} className="btn btn-blue p20-56">Delete Album</button>
                        <button onClick={this.prepareUpload.bind(this)} className="btn btn-blue p20-56">Edit Album</button>
                    </div>
            </Col>
        )
    }
}
function mapStateToProps(state){
    return{
        allAlbums:state.album.allAlbums
    }
}
export default connect(mapStateToProps, {uploadAlbum, uploadPhotos})(EditAlbum)
