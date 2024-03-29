import React from 'react'
import { connect, useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { Button, Navbar, Container } from 'react-bootstrap';
import { userLogout } from '../../reducers/userSlice';
import { waterReset } from '../../reducers/waterSlice';
import { foodLogout } from '../../reducers/foodSlice';
import { exerciseLogout } from '../../reducers/exerciseSlice';
import { settingsLogout } from '../../reducers/settingsSlice';
import { healthGoalLogout } from '../../reducers/healthGoalSlice';
import WaterGoalNotification from './Notifications/WaterGoalNotification';
import FoodGoalNotification from './Notifications/FoodGoalNotification';
import WeightGoalNotification from './Notifications/WeightGoalNotification';

const NavBar = (props) => {
    const userData = useSelector((state) => state.userState)
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleLogout = () => {
        sessionStorage.clear()
        dispatch(waterReset())
        dispatch(foodLogout())
        dispatch(exerciseLogout())
        dispatch(userLogout())
        dispatch(settingsLogout())
        dispatch(healthGoalLogout())
        navigate('/login')
    }

    const displayUserData = () => {
        if (userData.user !== null) {
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
        <div>
        <Navbar bg="primary" variant="dark" fixed="top">
            <Container>
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                        Signed in as: <Link to="/userinfo">{displayUserData()}</Link>
                        {authCheckFalse(<Button onClick={() => navigate('/login')}>Sign In</Button>)}
                        {authCheckFalse(<Button onClick={() => navigate('/register')}>Register</Button>)}
                        {authCheckTrue(<Button onClick={handleLogout}>Logout</Button>)}
                        {authCheckTrue(<Button variant='dark' onClick={() => navigate('/userinfo/settings')}>⛭</Button>)}
                    </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        <WaterGoalNotification />
        <FoodGoalNotification />
        <WeightGoalNotification />
        </div>
    )
}

export default connect(null, {userLogout, waterReset, exerciseLogout, foodLogout}) (NavBar);