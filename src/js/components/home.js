import React, {Component} from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import StepOne from './stepOne.js'
import StepTwo from './stepTwo.js'
import StepThree from './stepThree.js'
import StepFour from './stepFour.js'
import StepFive from './stepFive.js'
import StepSix from './stepSix.js'
import Summary from './summary.js'
import Payment from './payment.js'
export default class Home extends Component{
    constructor(props){
        super();
        this.state={
            step:2,
        }
    }
    renderSteps(){
        switch(this.state.step){
            case 1:
                return <StepOne forward={()=>this.setState({step:2})} />; break;
            case 2:
                return <StepTwo forward={()=>this.setState({step:3})} />; break;
            case 3:
                return <StepThree forward={()=>this.setState({step:4})} />; break;
            case 4:
                return <StepFour forward={()=>this.setState({step:5})} />; break;
            case 5:
                return <StepFive forward={()=>this.setState({step:6})} />; break;
            case 6:
                return <StepSix forward={()=>this.setState({step:'summary'})} />; break;
            case 'summary':
                return <Summary makePayment={()=>this.setState({step:'payment'})} />; break;
            case 'payment':
                return <Payment backToHome={()=>this.setState({step:''})} />; break;
            default:
                return(
                    <Col md="8" className="centered text-center">
                        <div className="step">&nbsp</div>
                        <h1>What would you like to do?</h1>
                        <div className="action-btn-container">
                            <a href="#" className ="btn btn-white-transparent">Check Admission Status</a>
                            <a className ="btn btn-blue" onClick={(e)=>this.setState({step:1})}>Start Admission Process</a>
                        </div>
                    </Col>
                );
        }
    }
    render(){
        return(
            <Grid fluid={true}>
                <Row>
                    <section className="primary-bg">
                        <Grid>
                            <Col md="12">
                                {
                                    this.renderSteps()
                                }


                            </Col>
                        </Grid>
                    </section>
                </Row>
            </Grid>
        )
    }
}
