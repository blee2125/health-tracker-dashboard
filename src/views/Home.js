import React, { useContext } from 'react'
import { useSelector } from 'react-redux'
import UserContext from '../context/userContext';

const HomePage = (props) => {
    const {userData} = useContext(UserContext);
    const waterState = useSelector((state) => state.waterState)

    const dateString = new Date().toString().split(' ')
    const dateStringSplit = (`${dateString[1]} ${dateString[2]} ${dateString[3]}`).toString()

    const displayUserData = () => {
        if (userData.user !== undefined) {
            return userData.user.username
        } else {
            return 'not logged in'
        }
    }

    return(
        <div>
            <h1>{dateStringSplit}</h1>
            <p>Water - Glasses {waterState.glasses === 0 ?  "" : waterState.glasses}</p>
            <p>Username: {displayUserData()}</p>
        </div>
    )
}

export default (HomePage);