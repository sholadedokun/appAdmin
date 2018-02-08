import React, { Component } from 'react';
import Header from './components/header';
import {BrowserRouter as Router,  Route } from 'react-router-dom';
import {Grid, Row, Col} from 'react-bootstrap'
// import Footer from './components/footer';
import Home from './components/home'
import UploadAlbum from './components/uploadAlbum'
import ViewAlbum from './components/viewAlbum'
import EditAlbum from './components/editAlbum'

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
                                <Route  exact path="/viewAlbum"  component={ViewAlbum} />
                                <Route  exact path="/editAlbum/:id"  component={EditAlbum} />
                            </Col>
                        </section>
                    </Row>
                </Grid>
            </Router>
        );
    }
}

// export default connect(null, {getAllPlans, getServerDate})(App);
