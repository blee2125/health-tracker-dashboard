import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';

const NavBar = () => {
    
    return(
        <Navbar bg="primary" variant="dark">
            <Container>
                <Navbar.Brand href="#home">Health Tracker Dashboard</Navbar.Brand>
                <Nav className="me-auto">

                </Nav>
            </Container>
        </Navbar>
    )
}

export default NavBar;