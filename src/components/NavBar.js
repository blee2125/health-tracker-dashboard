import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import { Link } from 'react-router-dom';

import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const NavBar = () => {
    let navigate = useNavigate();

    const handleLogout = () => {
        sessionStorage.clear()
        //navigate('/')
    }
    
    return(
        <Navbar bg="primary" variant="dark" fixed="top">
            <Container>
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                        Signed in as: <a href="/userinfo">someone</a>
                        <Button onClick={() => navigate('/login')}>login</Button>
                        <Button onClick={() => navigate('/register')}>signup</Button>
                        <Button onClick={handleLogout}>Logout</Button>
                    </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar;