import React, {Component} from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
export default class StepSix extends Component{
    render(){
        return(
            <Col md="8" className="centered text-center">
            <div className="col-md-8 centered text-center">
                  <div className="step">Almost there.</div>
                  <h1>Please review your application information carefully.</h1>
                </div>
                {/* start form */}
                {/* form content */}
                <div className="form-content">
                  <div className="col-md-10 centered">
                    {/* basic info */}
                    <div className="card col-md-12 text-center">
                      <img src="https://lorempixel.com/200/200/people" alt="student_name" className="round-image" />
                      <div className="name">Olamide Adedibu</div>
                      <div className="text">Email: olamideadebibu@gmail.com</div>
                      <div className="text">Phone: +234 802 345 6789</div>
                      <div className="application-details">
                        <div className="col-md-6 pl-r">
                          <div className="text-card">Preffered Course: <span className="blue">BSc Economics</span></div>
                        </div>
                        <div className="col-md-6 pl-r">
                          <div className="text-card">Application Status: <span className="amber">Pending</span></div>
                        </div>
                      </div>
                    </div>
                    {/* end basic info */}
                    {/* JAMB result */}
                    <div className="card col-md-12">
                      <h2>JAMB Result</h2>
                      <div className="col-md-3 pl-r">
                        <div className="text-card">Use of English: 58</div>
                      </div>
                      <div className="col-md-3 pl-r">
                        <div className="text-card">Mathematics: 58</div>
                      </div>
                      <div className="col-md-3 pl-r">
                        <div className="text-card">Physics: 58</div>
                      </div>
                      <div className="col-md-3 pl-r">
                        <div className="text-card">Chemistry: 58</div>
                      </div>
                    </div>
                    {/* end JAMB result */}
                    {/* O'Level result */}
                    <div className="card col-md-12">
                      <h2>{`O'Level`}</h2>
                      <div className="col-md-4 pl-r">
                        <div className="text-card">English: B2</div>
                      </div>
                      <div className="col-md-4 pl-r">
                        <div className="text-card">Mathematics: A1</div>
                      </div>
                      <div className="col-md-4 pl-r">
                        <div className="text-card">Physics: C5</div>
                      </div>
                      <div className="col-md-4 pl-r">
                        <div className="text-card">Chemistry: B3</div>
                      </div>
                      <div className="col-md-4 pl-r">
                        <div className="text-card">Biology: A1</div>
                      </div>
                      <div className="col-md-4 pl-r">
                        <div className="text-card">Yoruca: C6</div>
                      </div>
                      <div className="col-md-4 pl-r">
                        <div className="text-card">Further Mathematics: C6</div>
                      </div>
                      <div className="col-md-4 pl-r">
                        <div className="text-card">Economics: C5</div>
                      </div>
                      <div className="col-md-4 pl-r">
                        <div className="text-card">Geography: C4</div>
                      </div>
                    </div>
                    {/* end O'Level result */}
                    {/* Transaction details */}
                    <div className="card col-md-12">
                      <h2>Transaction Details</h2>
                      <div className="col-md-12 pl-r">
                        <div className="text-card">
                          <div className="row">
                            <div className="col-md-6">Application Fee</div>
                            <div className="col-md-6 text-right">₦13,500</div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-12 pl-r">
                        <div className="text-card">
                          <div className="row">
                            <div className="col-md-6">Date Initiated</div>
                            <div className="col-md-6 text-right">Jan. 14 2017 12:00pm</div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-12 pl-r">
                        <div className="text-card">
                          <div className="row">
                            <div className="col-md-6">Transaction status</div>
                            <div className="col-md-6 text-right">Pending payment</div>
                          </div>
                        </div>
                      </div>
                      {/* action button */}
                      <div className="action-btn-container text-center">
                        <form method="post" action="payment.html" id="summary">
                          <button onClick={this.props.makePayment.bind(this)} className="btn btn-blue">Proceed to Make Payment</button>
                        </form>
                      </div>
                      {/* end action button */}
                    </div>
                    {/* end Transaction details */}
                  </div>
                  {/* payment info */}
                </div>
            </Col>
        )
    }
}
