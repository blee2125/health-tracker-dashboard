import React, {useContext} from 'react'
import { connect, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { Button, Navbar, Container } from 'react-bootstrap';
import userContext from '../context/userContext';
import { userLogout } from '../reducers/userSlice';

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
                        {authCheckFalse(<Button onClick={() => navigate('/login')}>Sign In</Button>)}
                        {authCheckFalse(<Button onClick={() => navigate('/register')}>Register</Button>)}
                        {authCheckTrue(<Button onClick={handleLogout}>Logout</Button>)}
                    </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default connect(null, {userLogout}) (NavBar);