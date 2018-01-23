import React, {Component} from 'react';
import {Col} from 'react-bootstrap';
export default ({addImage})=>
            <Col md="12">
                <div className="form-group">
                    <div className="file-loading">
                        <input id="passport" type="file"  accept="image/*" onChange={addImage}  />
                    </div>
                </div>
            </Col>
