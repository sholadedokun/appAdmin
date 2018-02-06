import React, {Component} from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
export default class StepSix extends Component{
    render(){
        return(
            <Col md="8" className="centered text-center">
                <div className="step">Step 6 of 6</div>
                <h1>{`Hi Olamide Adedibu, Please provide your O'Level result`}</h1>
                {/* start form */}
                <form id="6">
                  {/* form content */}
                  <div className="form-content">
                    <div className="col-md-10 centered">
                      {/* O' level details */}
                      <div className="col-md-12 pl-r">
                        <div className="form-group">
                          <label htmlFor="number_of_sittings" className="text-white" style={{textAlign: 'left !important', display: 'block'}}>Number of Sittings</label>
                          <select className="form-control select2 default">
                            <option value>Number of Sittings</option>
                            <option value={1}>1</option>
                            <option value={2}>2</option>
                          </select>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-12 bdr-top">
                          <div className="col-md-4 pl-r">
                            <div className="form-group">
                              <label htmlFor="exam_type" className="text-white" style={{textAlign: 'left !important', display: 'block'}}>Exam Type</label>
                              <select className="form-control select2 default">
                                <option value>Exam Type</option>
                                <option value="WAEC">WAEC</option>
                                <option value="NECO">NECO</option>
                                <option value="WASSCE">WASSCE</option>
                                <option value="NABTEB">NABTEB</option>
                              </select>
                            </div>
                          </div>
                          <div className="col-md-4 pl-r">
                            <div className="form-group">
                              <label htmlFor="exam_number" className="text-white" style={{textAlign: 'left !important', display: 'block'}}>Exam Number</label>
                              <input type="txtExamNumber" className="form-control" placeholder="Exam Number" />
                            </div>
                          </div>
                          <div className="col-md-4 pl-r">
                            <div className="form-group">
                              <label htmlFor="exam_year" className="text-white" style={{textAlign: 'left !important', display: 'block'}}>Exam Year</label>
                              <input type="txtExamYear" className="form-control" placeholder="Exam Year" />
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* subject list container */}
                      <div className="subject-container">
                        <div className="row">
                          <div className="col-md-12">
                            <div className="col-md-10 col-sm-10 col-xs-8 pl-r">
                              <p className="subject" style={{textAlign: 'left !important'}}>English Language</p>
                            </div>
                            <div className="col-md-2 col-sm-2 col-xs-4 pl-r">
                              <div className="form-group no-margin">
                                <select className="form-control select2 default">
                                  <option value="A1">A1</option>
                                  <option value="B2">B2</option>
                                  <option value="B3">B3</option>
                                  <option value="C4">C4</option>
                                  <option value="C5">C5</option>
                                  <option value="C6">C6</option>
                                  <option value="D7">D7</option>
                                  <option value="E8">E8</option>
                                  <option value="F9">F9</option>
                                </select>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* subject divider */}
                        <div className="col-md-12 pl-r"><hr className="subject-divider" /></div>
                        {/* subject divider */}
                        <div className="row">
                          <div className="col-md-12">
                            <div className="col-md-10 col-sm-10 col-xs-8 pl-r">
                              <p className="subject" style={{textAlign: 'left !important'}}>Mathematics</p>
                            </div>
                            <div className="col-md-2 col-sm-2 col-xs-4 pl-r">
                              <div className="form-group no-margin">
                                <select className="form-control select2 default">
                                  <option value="A1">A1</option>
                                  <option value="B2">B2</option>
                                  <option value="B3">B3</option>
                                  <option value="C4">C4</option>
                                  <option value="C5">C5</option>
                                  <option value="C6">C6</option>
                                  <option value="D7">D7</option>
                                  <option value="E8">E8</option>
                                  <option value="F9">F9</option>
                                </select>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* subject divider */}
                        <div className="col-md-12 pl-r"><hr className="subject-divider" /></div>
                        {/* subject divider */}
                        <div className="row">
                          <div className="col-md-12">
                            <div className="col-md-10 col-sm-10 col-xs-8 pl-r">
                              <p className="subject" style={{textAlign: 'left !important'}}>History of West Africa</p>
                            </div>
                            <div className="col-md-2 col-sm-2 col-xs-4 pl-r">
                              <div className="form-group no-margin">
                                <select className="form-control select2 default">
                                  <option value="A1">A1</option>
                                  <option value="B2">B2</option>
                                  <option value="B3">B3</option>
                                  <option value="C4">C4</option>
                                  <option value="C5">C5</option>
                                  <option value="C6">C6</option>
                                  <option value="D7">D7</option>
                                  <option value="E8">E8</option>
                                  <option value="F9">F9</option>
                                </select>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* end subject list container */}
                    </div>
                  </div>
                  {/* end form content */}
                  {/* action buttons */}
                  <div className="action-btn-container">
                    <button type="submit" className="btn btn-gray p20-72">Back</button>
                    <button  onClick={this.props.forward.bind(this)} className="btn btn-blue p20-56">Continue</button>
                  </div>
                  {/* end action buttons */}
                </form>
            </Col>
        )
    }
}
