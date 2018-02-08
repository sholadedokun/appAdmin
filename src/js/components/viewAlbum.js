import React, {Component} from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import FileUploader from './fileUpload'
import {fetchAlbum} from '../actions/albumActions'
import {connect} from 'react-redux'
class ViewAlbum extends Component{
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
    componentWillMount(){
        this.props.fetchAlbum()
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
        this.props.fetchAlbum(formData, this.state.title, this.state.description);
    }
    editAlbum(id){
        this.props.history.push('/editAlbum/'+id)
    }
    render(){
        const {images}=this.state;
        const {allImages}=this.props;
        console.log(allImages)
        return(
            <Col md="8" className="centered text-center">
                <div className="step">View Uploaded Photo Album</div>
                    <div className="form-content">
                        <div className="col-md-10 centered">
                            <div className="row">
                                <div className="col-md-12">
                                {
                                    (this.props.allImages) ?
                                        <Row className="allContainer">
                                            <Col xs="12" sm="6" md="4" className="imageContainer">
                                                {
                                                    allImages.filter((item,index)=>(index+1)%3==1).map(item=>
                                                        <div className="imageDetails">
                                                            <img src={`https://berhymes-back.herokuapp.com/public/uploads/specdios/${item.imagesUrl.split(',')[0]}`} width="100%"/>
                                                            <span className="imageBrief">
                                                                <p className="count">{item.imagesUrl.split(',').length} Photos</p>
                                                                <p className="photoDivider"></p>

                                                                <p className="title">{item.title}</p>
                                                                <p className="description">
                                                                    {item.description}
                                                                </p>
                                                                <button onClick={this.editAlbum.bind(this, item._id)}> Edit Album </button>
                                                            </span>

                                                        </div>
                                                    )
                                                }
                                            </Col>
                                            <Col xs="12" sm="6" md="4" className="imageContainer">
                                                {
                                                    allImages.filter((item,index)=>(index+1)%3==2).map(item=>
                                                        <div className="imageDetails">
                                                            <img src={`https://berhymes-back.herokuapp.com/public/uploads/specdios/${item.imagesUrl.split(',')[0]}`} width="100%" />
                                                            <span className="imageBrief">
                                                                <p className="count">{item.imagesUrl.split(',').length} Photos

                                                                </p>
                                                                <p className="photoDivider"></p>

                                                                <p className="title">{item.title}</p>
                                                                <p className="description">
                                                                    {item.description}
                                                                </p>
                                                                <button onClick={this.editAlbum.bind(this, item._id)}> Edit Album </button>
                                                            </span>

                                                        </div>
                                                    )
                                                }
                                            </Col>
                                            <Col xs="12" sm="6" md="4" className="imageContainer">
                                                {
                                                    allImages.filter((item,index)=>(index+1)%3==0).map(item=>
                                                        <div className="imageDetails">
                                                            <img src={`https://berhymes-back.herokuapp.com/public/uploads/specdios/${item.imagesUrl.split(',')[0]}`} width="100%" />
                                                            <span className="imageBrief">
                                                                <p className="count">{item.imagesUrl.split(',').length} Photos

                                                                </p>
                                                                <p className="photoDivider"></p>

                                                                <p className="title">{item.title}</p>
                                                                <p className="description">
                                                                    {item.description}
                                                                </p>
                                                                <button onClick={this.editAlbum.bind(this, item._id)}> Edit Album </button>
                                                            </span>

                                                        </div>
                                                    )
                                                }
                                            </Col>
                                        </Row>

                                    :''
                                }
                                </div>
                            </div>
                        </div>
                    </div>

            </Col>
        )
    }
}
function mapStateToProps(state){
    console.log(state)
    return{
        allImages:state.album.allAlbums
    }
}
export default connect(mapStateToProps, {fetchAlbum})(ViewAlbum)
