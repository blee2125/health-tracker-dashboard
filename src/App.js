import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { useEffect, useState } from 'react';
import { connect } from 'react-redux'
import { Routes, Route } from "react-router-dom";
import useToken from './hooks/useToken';
import userContext from './context/userContext';
import NavBar from './views/NavBar';
import Login from './components/User/Login';
import Register from './components/User/Register';
import UserInfo from './components/User/UserInfo';
import EditUserPassword from './components/User/EditUserPassword';
import SideBar from './views/SideBar';
import HomePage from './views/Home';
import AccessDeniedPage from './views/AccessDeniedPage';
import Water from './components/Water/Water';
import Food from './components/Food/Food';
import FoodAdd from './components/Food/FoodAdd';
import FoodEdit from './components/Food/FoodEdit';
import FoodByDate from './components/Food/FoodByDate';
import Exercise from './components/Exercise/Exercise';
import ExerciseAdd from './components/Exercise/ExerciseAdd';
import ExerciseEdit from './components/Exercise/ExerciseEdit';
import ExerciseByDate from './components/Exercise/ExerciseByDate';
import { getWaterByDate } from "./reducers/waterSlice";

function App(props) {
  const { token, setToken } = useToken();
  const [userData, setUserData] = useState({
    token: token,
    user: undefined,
    isAuthenticated: false
  })

  useEffect(() => {
    sessionStorage.clear()
      // eslint-disable-next-line
  }, [])

  const isAuth = (element) => {
    if (userData.isAuthenticated === true) {
      return element
    } else {
      return <AccessDeniedPage />
    }
  }

  const isNotAuth = (element) => {
    if (userData.isAuthenticated === false) {
      return element
    } else {
      return <AccessDeniedPage />
    }
  }

  return (
    <div className="App">
      <userContext.Provider value={{ userData, setUserData }}>
        <NavBar setUserData={setUserData} />
        <div>
          <SideBar />
          <div className='main'>
            <Routes>
              <Route path="/" element={<HomePage context={userContext} />} />
              <Route path="/water" element={isAuth(<Water />)} />
              <Route path="/exercise" element={isAuth(<Exercise />)} />
                <Route path="/exercise/edit/:id" element={isAuth(<ExerciseEdit />)} />
                <Route path="/exercise/add" element={isAuth(<ExerciseAdd />)} />
                <Route path="/exercise/byDate" element={isAuth(<ExerciseByDate />)} />
              <Route path="/food" element={isAuth(<Food />)} />
                <Route path="/food/edit/:id" element={isAuth(<FoodEdit />)} />
                <Route path="/food/add" element={isAuth(<FoodAdd />)} />
                <Route path="/food/byDate" element={isAuth(<FoodByDate />)} />
              <Route path='userinfo' element={isAuth(<UserInfo />)} />
                <Route path="userinfo/editpassword" element={isAuth(<EditUserPassword />)} />
              <Route path="/login" element={isNotAuth(<Login setToken={setToken} setUserData={setUserData} />)} />
              <Route path="/register" element={isNotAuth(<Register />)} />
            </Routes>
          </div>
        </div>
      </userContext.Provider>
    </div>
  );
}

export default connect(null, { getWaterByDate, context: userContext })(App);