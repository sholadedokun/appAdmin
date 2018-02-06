import React, {Component} from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
export default class StepSix extends Component{
    render(){
        return(
            <Col md="6" className="centered text-center">

                <div className="step">Payment</div>
                <h1>Make payment to complete your admission process</h1>
                {/* start form */}
                <form method="post" action="step8.html" id="7" className="payment">
                  {/* form content */}
                  <div className="form-content">
                    {/* payment info */}
                    <div className="col-md-10 centered">
                      <div className="col-md-12">
                        <img src="https://lorempixel.com/200/200/people" alt="student_name" className="round-image" />
                        <div className="name">Olamide Adedibu</div>
                      </div>
                    </div>
                    <div className="col-md-12 no-padding"><hr className="divider" /></div>
                    <div className="payment-details">
                      <div className="row">
                        <div className="col-md-12">
                          <div className="col-md-6 col-sm-6 col-xs-6 pl-r">
                            <p className="text" style={{textAlign: 'left !important'}}>Application Fee</p>
                          </div>
                          <div className="col-md-6 col-sm-6 col-xs-6 pl-r">
                            <p className="price-text" style={{textAlign: 'right !important'}}>₦10,000</p>
                          </div>
                        </div>
                      </div>
                      {/* payment divider */}
                      <div className="col-md-12 pl-r"><hr className="divider no-margin" /></div>
                      <div className="row">
                        <div className="col-md-12">
                          <div className="col-md-6 col-sm-6 col-xs-6 pl-r">
                            <p className="text" style={{textAlign: 'left !important'}}>Processing Fee</p>
                          </div>
                          <div className="col-md-6 col-sm-6 col-xs-6 pl-r">
                            <p className="price-text" style={{textAlign: 'right !important'}}>₦3,000</p>
                          </div>
                        </div>
                      </div>
                      {/* payment divider */}
                      <div className="col-md-12 pl-r"><hr className="divider no-margin" /></div>
                      <div className="row">
                        <div className="col-md-12">
                          <div className="col-md-6 col-sm-6 col-xs-6 pl-r">
                            <p className="text" style={{textAlign: 'left !important'}}>Other Charges</p>
                          </div>
                          <div className="col-md-6 col-sm-6 col-xs-6 pl-r">
                            <p className="price-text" style={{textAlign: 'right !important'}}>₦500</p>
                          </div>
                        </div>
                      </div>
                      {/* payment divider */}
                      <div className="col-md-12 pl-r"><hr className="divider no-margin" /></div>
                      <div className="row">
                        <div className="col-md-12">
                          <div className="col-md-6 col-sm-6 col-xs-6 pl-r">
                            <p className="text" style={{textAlign: 'left !important'}}>Transaction Ref.</p>
                          </div>
                          <div className="col-md-6 col-sm-6 col-xs-6 pl-r">
                            <p className="price-text" style={{textAlign: 'right !important'}}>DQDPCCY4CMS</p>
                          </div>
                        </div>
                      </div>
                      {/* payment divider */}
                      <div className="col-md-12 pl-r"><hr className="divider no-margin" /></div>
                      <div className="row">
                        <div className="col-md-12">
                          <div className="col-md-6 col-sm-6 col-xs-6 pl-r">
                            <p className="text" style={{textAlign: 'left !important'}}>Total</p>
                          </div>
                          <div className="col-md-6 col-sm-6 col-xs-6 pl-r">
                            <p className="total-price" style={{textAlign: 'right !important'}}>₦13,500</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* payment option */}
                    <div className="col-md-10 centered">
                      <div className="col-md-12">
                        <div className="form-group">
                          <label htmlFor="payment_option" style={{textAlign: 'left !important', display: 'block'}}>Payment Option</label>
                          <select className="form-control select2 white" id="gender">
                            <option value>Payment Option</option>
                            <option value="online">Pay Online</option>
                            <option value="bank">Pay to Bank</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    {/* end paymenet option */}
                    {/* end payment info */}
                  </div>
                  {/* end form content */}
                  {/* action buttons */}
                  <div className="action-btn-container">
                    <button type="submit" onclick="history(-1)" className="btn btn-gray p20-72">Back</button>
                    <button type="submit" form="7" className="btn btn-blue">Make Payment</button>
                  </div>
                  {/* end action buttons */}
                </form>
                {/* end form */}
            </Col>
        )
    }
}
