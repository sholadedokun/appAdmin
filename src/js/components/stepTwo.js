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
            images:[''],
        }
    }
    processImage(index, data){
        console.log(index, data.target.files[0])
        let images=this.state.images;
        images[index]=data.target.files[0]
        this.setState({images})
    }
    addMoreImages(){
        let images=this.state.images;
        images.push('');
        this.setState({images})
    }
    uploadImages(){
        let images=this.state.images
        let formData = new FormData();
        for(var i=0; i<images.length; i++){
            formData.append('file', images[i]);
        }
        formData.append('title', this.state.title);
        formData.append('description', this.state.description);
        this.props.uploadAlbum(formData);
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
                                    <Col xs="12"  className="pl-r">
                                        <div className="form-group">
                                            <label for="lastname" className="text-white" style={{textAlign:"left !important", display:"block"}}>Album Title</label>
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
                                            <FileUploader addImage={this.processImage.bind(this, index)} />
                                        )
                                    })
                                    }
                                    <Col md="12">
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
