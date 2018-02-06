import React, {Component} from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
export default class StepFive extends Component{
    render(){
        return(
            <Col md="8" className="centered text-center">
                <div className="step">Step 5 of 6</div>
                <h1>Hi Olamide Adedibu, Please provide your JAMB Reg. Number</h1>
                     {/* start form */}
                     <form  id="5">
                       {/* form content */}
                       <div className="form-content">
                         {/* jamb details */}
                         <div className="col-md-10 centered">
                           <div className="col-md-12">
                             <div className="form-group">
                               <input type="txtJambRegNo" className="form-control" placeholder="JAMB Reg. Number" />
                             </div>
                           </div>
                         </div>
                         {/* end jamb details */}
                       </div>
                       {/* end form content */}
                       {/* action buttons */}
                       <div className="action-btn-container">
                         <button className="btn btn-gray p20-72">Back</button>
                         <button onClick={this.props.forward.bind(this)}  className="btn btn-blue p20-56">Continue</button>
                       </div>
                       {/* end action buttons */}
                     </form>
            </Col>
        )
    }
}
