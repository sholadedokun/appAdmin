import React, { Component } from 'react';
import Header from './components/header';
import {BrowserRouter as Router,  Route } from 'react-router-dom';
import {Grid, Row} from 'react-bootstrap'
// import Footer from './components/footer';
import Home from './components/home'
// import Dashboard from './components/account/home'
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
                <Row>
                    <Grid fluid={true} className="App">
                        <Header></Header>
                        <Route  exact path="/"  component={Home} />
                    </Grid>
                </Row>
            </Router>
        );
    }
}

// export default connect(null, {getAllPlans, getServerDate})(App);
