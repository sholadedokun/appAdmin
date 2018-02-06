import React, {Component} from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import {connect} from 'react-redux'
import state from '../assets/state'
import nationality from '../assets/nationality'
class StepOne extends Component{

    constructor(props){
        super(props);
        this.stateList=state;
        this.localGovernementList=this.props.fetchedLocalGovernment;
        this.nationalityList=nationality;
        this.state={

        }
    }
    updateState(key, e){
        this.setState({key:e.target.value})
        if(key === 'state'){
            this.props.fetchLocalGovernment(e.target.value)
        }
    }
    render(){
        const {state}=this.state
        return(
            <Col md="8" className="centered text-center">
                <div className="step">Step 1 of 6</div>
                <h1>Please provide your details below</h1>
                <form id="1">
                    <div className="form-content">
                        <Col xs="10" className="centered">
                            <div className="row">
                                <Col xs="12">
                                    <Col xs="4"  className="pl-r">
                                        <div className="form-group">
                                            <label for="lastname" className="text-white" style={{textAlign:"left !important", display:"block"}}>Surname</label>
                                            <input type="txtLastname" className="form-control" placeholder="Surname"  value={this.state.surname} onChange={this.updateState.bind(this, 'surname')}  />
                                        </div>
                                    </Col>
                                    <Col xs="4"  className="pl-r">
                                        <div className="form-group">
                                            <label for="firstname" className="text-white"  style={{textAlign:"left !important", display:"block"}}>Firstname</label>
                                            <input type="txtFirstname" className="form-control" placeholder="Firstname"  value={this.state.firstname} onChange={this.updateState.bind(this, 'firstname')}  />
                                        </div>
                                    </Col>
                                    <Col xs="4"  className="pl-r">
                                        <div className="form-group">
                                            <label for="othernames" className="text-white"  style={{textAlign:"left !important", display:"block"}}>Othernames</label>
                                            <input type="txtOthernames" className="form-control" placeholder="Othernames"  value={this.state.othername} onChange={this.updateState.bind(this, 'othernames')}  />
                                        </div>
                                    </Col>
                                    <Col xs="4"  className=" pl-r">
                                        <div className="form-group">
                                            <label for="gender" className="text-white"  style={{textAlign:"left !important", display:"block"}}>Gender</label>
                                            <select className="form-control select2 dark" id="gender"  value={this.state.gender} onChange={this.updateState.bind(this, 'gender')} >
                                                <option value="">Gender</option>
                                                <option value="female">Female</option>
                                                <option value="male">Male</option>
                                            </select>
                                        </div>
                                    </Col>
                                    <Col xs="4"  className=" pl-r">
                                        <div className="form-group">
                                            <label for="marital_status" className="text-white"  style={{textAlign:"left !important", display:"block"}}>Marital Status</label>
                                            <select className="form-control select2 default" value={this.state.maritalStatus} onChange={this.updateState.bind(this, 'maritalStatus')} >
                                                <option value="">Marital Status</option>
                                                <option value="Married">Married</option>
                                                <option value="Divorced">Divorced</option>
                                                <option value="Single">Single</option>
                                            </select>
                                        </div>
                                    </Col>
                                    <Col xs="4"  className=" pl-r">
                                        <div className="form-group">
                                            <label for="dob" className="text-white"  style={{textAlign:"left !important", display:"block"}}>Date of Birth (dd/mm/yyyy)</label>
                                            <input type="txtDOB" className="form-control datepicker" placeholder="Date of Birth" />
                                        </div>
                                    </Col>
                                    <Col xs="12"  className="pl-r">
                                        <div className="form-group">
                                            <label for="disability" className="text-white"  style={{textAlign:"left !important", display:"block"}}>Disabilities</label>
                                            <input type="txtDisabilities" className="form-control" placeholder="Disabilities"  value={this.state.disability} onChange={this.updateState.bind(this, 'disability')}  />
                                        </div>
                                    </Col>
                                </Col>
                            </div>
                            <div className="row">
                                <Col xs="12">
                                    <Col xs="6"  className="pl-r">
                                        <div className="form-group">
                                            <label for="phone" className="text-white"  style={{textAlign:"left !important", display:"block"}}>Phone Number</label>
                                            <input type="txtPhoneNumber" className="form-control" placeholder="Phone Number"  value={this.state.phoneNumber} onChange={this.updateState.bind(this, 'phoneNumber')} />
                                        </div>
                                    </Col>
                                    <Col xs="6"  className="pl-r">
                                        <div className="form-group">
                                            <label for="email" className="text-white"  style={{textAlign:"left !important", display:"block"}}>Email Address</label>
                                            <input type="txtEmail" className="form-control" placeholder="Email Address"  value={this.state.emailAddress} onChange={this.updateState.bind(this, 'emailAddress')}  />
                                        </div>
                                    </Col>
                                    <Col xs="12"  className="pl-r">
                                        <div className="form-group">
                                            <label for="address" className="text-white"  style={{textAlign:"left !important", display:"block"}}>Contact Address</label>
                                            <input type="txtContactAddress" className="form-control" placeholder="Contact Address"  value={this.state.contact} onChange={this.updateState.bind(this, 'contact')}  />
                                        </div>
                                    </Col>
                                </Col>
                            </div>
                            <div className="row">
                                <Col xs="12">
                                    <Col xs="6"  className="pl-r">
                                        <div className="form-group">
                                            <label for="state" className="text-white"  style={{textAlign:"left !important", display:"block"}}>State of Origin</label>
                                            <select className="form-control select2 default" value={this.state.state} onChange={this.updateState.bind(this, 'state')} >
                                                <option>Select State of Origin</option>
                                                {this.stateList.map((item, index)=>
                                                <option key={index} value={item.state.name}>{item.state.name}</option>)}
                                            </select>
                                        </div>
                                    </Col>
                                    <Col xs="6"  className="pl-r">
                                        <div className="form-group">
                                            <label for="lga" className="text-white"  style={{textAlign:"left !important", display:"block"}}>LGA</label>
                                            <select className="form-control select2 default" value={this.state.localGovernment} onChange={this.updateState.bind(this, 'localGovernment')} >
                                                <option>Select Local Government</option>
                                                {this.localGovernementList.map((item, index)=>
                                                <option key={index} value={item.name}>{item.name}</option>)}
                                            </select>
                                        </div>
                                    </Col>
                                    <Col xs="12"  className="pl-r">
                                        <div className="form-group">
                                            <label for="nationality" className="text-white"  style={{textAlign:"left !important", display:"block"}}>Nationality</label>
                                            <select className="form-control select2 default" value={this.state.nationality} onChange={this.updateState.bind(this, 'nationality')} >
                                                <option>Select Nationality</option>
                                                {this.nationalityList.map((item, index)=>
                                                <option key={index} value={item}>{item}</option>)}
                                            </select>
                                        </div>
                                    </Col>
                                </Col>
                            </div>
                        </Col>
                    </div>
                    <div className="action-btn-container">
                        <button onClick={this.props.forward.bind(this)} className ="btn btn-blue p20-56">Continue</button>
                    </div>
                </form>
            </Col>
        )
    }
}
function mapStateToProps(state){
    return {
        fetchedLocalGovernment:state.admission.localGovernments
    }

}
export default connect(mapStateToProps)(StepOne)
