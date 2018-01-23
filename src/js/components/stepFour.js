import React, {Component} from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
export default class StepFour extends Component{
    render(){
        return(
            <Col md="8" className="centered text-center">
                <div className="step">Step 4 of 6</div>
                   <h1>Hi Olamide Adedibu, Please choose your preffered programme.</h1>
                   {/* start form */}
                   <form id="step_4">
                     {/* form content */}
                     <div className="form-content">
                       {/* entry mode */}
                       <div className="col-md-10 centered">
                         <div className="col-md-12">
                           <div className="form-group">
                             <select className="form-control select2 default" id="gender">
                               <option value>Preferred Program</option>
                               <option value={100}>B.Sc. Banking And Finance</option>
                               <option value={200}>B.Sc. Business Administration</option>
                               <option value={200}>B.Sc. Economics</option>
                               <option value={200}>B.Sc. Political Science</option>
                               <option value={200}>B.Sc. Public Administration</option>
                               <option value={200}>B.Sc. Sociology</option>
                             </select>
                           </div>
                         </div>
                       </div>
                       {/* end entry mode */}
                     </div>
                     {/* end form content */}
                     {/* action buttons */}
                     <div className="action-btn-container">
                       <button  className="btn btn-gray p20-72">Back</button>
                       <button  onClick={this.props.forward.bind(this)}  className="btn btn-blue p20-56">Continue</button>
                     </div>
                     {/* end action buttons */}
                   </form>
            </Col>
        )
    }
}
