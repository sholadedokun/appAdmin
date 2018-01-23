import React, {Component} from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
export default class StepThree extends Component{
    render(){
        return(
            <Col md="8" className="centered text-center">
                <div className="step">Step 3 of 6</div>
                <h1>Hi Olamide Adedibu, Please choose your mode of entry</h1>
                <form id="step_3">
                    <div className="form-content">
                        <div className="col-md-10 centered">
                            <div className="col-md-12">
                                <div className="form-group">
                                    <select className="form-control select2 default" id="gender">
                                        <option value="">Mode of Entry</option>
                                        <option value="100">100 Level</option>
                                        <option value="200">Direct Entry (200 Level)</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="action-btn-container">
                        <button type="submit" className ="btn btn-gray p20-72">Back</button>
                        <button  onClick={this.props.forward.bind(this)}  className ="btn btn-blue p20-56">Continue</button>
                    </div>
                </form>
            </Col>
        )
    }
}
