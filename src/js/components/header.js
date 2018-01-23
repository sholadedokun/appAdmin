import React,{Component} from 'react';
import { Grid, Row, Col, Navbar, Nav, NavItem} from 'react-bootstrap';
export default class Header extends Component{
    render(){
        return(
            <header>
                <Grid>
                    <Navbar collapseOnSelect>
                        <Navbar.Header>
                            <Navbar.Brand>
                                <a href="/">Brand</a>
                            </Navbar.Brand>
                        </Navbar.Header>
                        <Navbar.Collapse id="bs-example-navbar-collapse-1">
                            <Nav className="navbar-right">
                                <button type="button" className ="btn-small btn-primary">Back to website</button>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </Grid>
            </header>
        )
    }
}
