import React, {Component} from 'react';
import {Col} from 'react-bootstrap';
import Icon from './icon'
export default ({addImage, removeImage, imageUrl, imageName, errorMessage})=>
            <Col md="12" className="pl-r">
                <div className="form-group">
                    <div className="file-loading">
                        <input id="passport" type="file"  accept="image/*" onChange={addImage}  />
                        <span  className="delete" onClick={removeImage} ><Icon icon="trash" size="sm"/></span>
                        <p>{imageName?imageName:'Select Image...'}</p>
                        {
                            imageUrl?<img src={imageUrl} />:''
                        }
                        {
                            errorMessage?
                                <span className="invalidImage" onClick={removeImage} ><Icon icon="ban" size="sm"/>{errorMessage}</span>:
                                imageUrl?<span className="validImage"><Icon icon="check" size="sm" /></span>:''
                        }
                    </div>
                </div>
            </Col>
