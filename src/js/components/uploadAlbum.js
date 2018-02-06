import React, {Component} from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import FileUploader from './fileUpload'
import {uploadAlbum} from '../actions/uploadAlbum'
import {connect} from 'react-redux'
 class StepTwo extends Component{
    constructor(){
        super();
        this.state={
            title:'',
            description:'',
            images:[
                {data:'', name:'', url:''}
            ],
        }
    }
    processImage(index, action, data){
        let images=this.state.images;
        console.log('as')
        if(action==='add'){
            console.log('asl')
            let that=this;
            images[index].data=data.target.files[0]
            let reader =new FileReader();
            // console.log('asf', images[index].data)
            reader.onload=function (){
                console.log('asf', images[index].data)
                let image= new Image;
                let errorMessage=[]
                image.onload=()=>{
                    if(1048 < (that.state.images[index].data.size/1000)){
                        images[index].errorMessage=`Image file size can't be more than 2mb. Change or Remove Image`
                    }
                    that.setState({images})
                }
                image.src=reader.result;
                images[index].src=reader.result
                images[index].name=images[index].data.name
                that.setState({images})
            }
            reader.readAsDataURL(data.target.files[0])
        }
        else{
            if(images.length>1){
                images.splice(index, 1);
                this.setState({images})
            }
        }
    }
    addMoreImages(){
        let images=this.state.images;
        images.push({data:'', name:'', url:''});
        this.setState({images})
    }
    uploadImages(){
        let images=this.state.images
        let formData = new FormData();
        for(var i=0; i<images.length; i++){
            if(!images[i].errorMessage){
                formData.append('file', images[i].data);
            }

        }
        this.props.uploadAlbum(formData, this.state.title, this.state.description);
    }

    render(){
        const {images}=this.state
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
                                            <label for="lastname" className="text-white" style={{textAlign:"left !important", display:"block"}}>Album Description</label>
                                            <textarea  className="form-control" placeholder="Album Description"  value={this.state.description}  onChange={(e)=>this.setState({description:e.target.value})}  />
                                        </div>
                                    </Col>
                                    {images.map((item, index)=>{
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
                        <button onClick={this.uploadImages.bind(this)} className="btn btn-blue p20-56">Continue</button>
                    </div>
            </Col>
        )
    }
}
export default connect(null, {uploadAlbum})(StepTwo)
