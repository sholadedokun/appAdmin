import React, { Component } from 'react';
import Header from './components/header';
import {BrowserRouter as Router,  Route } from 'react-router-dom';
import {Grid, Row, Col} from 'react-bootstrap'
// import Footer from './components/footer';
import Home from './components/home'
import UploadAlbum from './components/uploadAlbum'
// import Howitworks from './components/howitworks'
// import Ourmission from './components/ourmission'
// import Whymom from './components/whymom'
// import Help from './components/help'
// import requireAuth from './components/auth/require_auth';
// import { connect } from 'react-redux';
// import { getAllPlans } from './actions/planActions';
// import {getServerDate} from './actions/userActions'
export default class App extends Component {
    // componentWillMount(){
    //     this.props.getAllPlans().then(data=>{
    //         this.props.getServerDate()
    //     })
    // }
    render() {
        return (
            <Router>
                <Grid fluid={true} className="App">
                    <Header></Header>
                    <Row>
                        <section className="primary-bg">
                            <Col md="12">
                                <Route  exact path="/"  component={Home} />
                                <Route  exact path="/uploadAlbum"  component={UploadAlbum} />
                            </Col>
                        </section>
                    </Row>
                </Grid>
            </Router>
        );
    }
}

// export default connect(null, {getAllPlans, getServerDate})(App);
