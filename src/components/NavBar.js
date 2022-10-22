import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';

import { useContext } from 'react';
import userContext from '../context/userContext';
import { connect } from 'react-redux';
import { userLogout } from '../reducers/userSlice';
import { useDispatch } from 'react-redux';

const NavBar = (props) => {
    const {userData} = useContext(userContext);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleLogout = () => {
        sessionStorage.clear()
        props.setUserData({token: undefined, user: undefined, isAuthenticated: false})
        dispatch(userLogout())
        navigate('/login')
    }

    const displayUserData = () => {
        if (userData.user !== undefined) {
            return userData.user.username
        } else {
            return 'not logged in'
        }
    }

    const authCheckTrue = (button) => {
        if (userData.isAuthenticated === true) {
            return button
        }
    }

    const authCheckFalse = (button) => {
        if (userData.isAuthenticated === false) {
            return button
        }
    }
    
    return(
        <Navbar bg="primary" variant="dark" fixed="top">
            <Container>
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                        Signed in as: <Link to="/userinfo">{displayUserData()}</Link>
                        {authCheckFalse(<Button onClick={() => navigate('/login')}>login</Button>)}
                        {authCheckFalse(<Button onClick={() => navigate('/register')}>signup</Button>)}
                        {authCheckTrue(<Button onClick={handleLogout}>Logout</Button>)}
                    </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default connect(null, {userLogout}) (NavBar);