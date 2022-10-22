import React from 'react'

import { useSelector } from 'react-redux'
import UserContext from '../context/userContext';
import { useContext } from 'react';

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

            <p>water - glasses {waterState.glasses === 0 ?  "" : waterState.glasses}</p>
            <p>username: {displayUserData()}</p>
            <button onClick={()=>console.log(userData)}>userdata</button>
        </div>
    )
}

export default (HomePage);