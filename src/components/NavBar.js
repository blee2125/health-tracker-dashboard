import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';


const NavBar = () => {
    
    return(
        <Navbar bg="primary" variant="dark">
            <Container>
                <Navbar.Brand as={Link} to="/">Health Tracker Dashboard</Navbar.Brand>
                <Nav className="me-auto">
                    <NavDropdown title="Exercise" id="navbarScrollingDropdown">
                        <NavDropdown.Item as={Link} to="/exercise">Exercise Home</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Nutrition" id="navbarScrollingDropdown">
                        <NavDropdown.Item as={Link} to="/food">Nutrition Home</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Water" id="navbarScrollingDropdown">
                        <NavDropdown.Item as={Link} to="/water">Water Home</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                        Signed in as: <a href="#login">someone</a>
                    </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar;