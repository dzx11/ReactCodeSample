import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { withRouter } from 'react-router-dom';

class NavBar extends React.Component {
    toUsers = () => {
        this.props.history.push('/users/');
    }
    render() {
        return <div>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand style={ { cursor:'pointer' } } onClick={ this.toUsers } > Sample App</Navbar.Brand>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link onClick={ this.toUsers }>Users</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    }
}
export default withRouter(NavBar);
