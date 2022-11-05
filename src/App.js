import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { useState } from 'react';
import { connect, useSelector } from 'react-redux'
import { Routes, Route } from "react-router-dom";
import NavBar from './components/Views/NavBar';
import Login from './components/User/Login';
import Register from './components/User/Register';
import UserInfo from './components/User/UserInfo';
import EditUserPassword from './components/User/EditUserPassword';
import Settings from './components/User/Settings/Settings';
import DeleteData from './components/User/Settings/DeleteData';
import SideBar from './components/Views/SideBar';
import DangerNotification from './components/Views/DangerAlert';
import HomePage from './components/Views/Home';
import AccessDeniedPage from './components/Views/AccessDeniedPage';
import Food from './components/Food/Food';
import FoodAdd from './components/Food/FormComponents/FoodAdd';
import FoodByDate from './components/Food/FoodByDate';
import FoodGraph from './components/Food/FoodGraph';
import Exercise from './components/Exercise/Exercise';
import ExerciseByDate from './components/Exercise/ExerciseByDate';
import ExerciseGraph from './components/Exercise/ExerciseGraph';
import WeightHome from './components/BodyMetrics/Weight/WeightHome';
import WeightGraph from './components/BodyMetrics/Weight/WeightGraph';
import WaterHome from './components/Water/WaterHome';
import HealthGoal from './components/HealthGoal/HealthGoal'

function App(props) {
  const userData = useSelector((state) => state.userState)

  const [dangerNotification, setDangerNotification] = useState();
  const [showDangerNotification, setShowDangerNotification] = useState(false);

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
        <NavBar />
        <div>
          <SideBar />
          <div className='main'>
            <DangerNotification dangerNotification={dangerNotification} showDangerNotification={showDangerNotification} setShowDangerNotification={setShowDangerNotification}/>
            <Routes>
              <Route path="/" element={isAuth(<HomePage />)} />
              <Route path="/water" element={isAuth(<WaterHome />)} />
              <Route path="/exercise" element={isAuth(<Exercise />)} />
                <Route path="/exercise/byDate" element={isAuth(<ExerciseByDate />)} />
                <Route path="/exercise/exerciseGraph" element={isAuth(<ExerciseGraph />)} />
              <Route path="/food" element={isAuth(<Food />)} />
                <Route path="/food/add" element={isAuth(<FoodAdd />)} />
                <Route path="/food/byDate" element={isAuth(<FoodByDate />)} />
                <Route path="/food/foodGraph" element={isAuth(<FoodGraph />)} />
              <Route path='userinfo' element={isAuth(<UserInfo />)} />
                <Route path="userinfo/editpassword" element={isAuth(<EditUserPassword />)} />
                <Route path="userinfo/settings" element={isAuth(<Settings />)} />
                <Route path="userinfo/settings/deletedata" element={isAuth(<DeleteData setShowDangerNotification={setShowDangerNotification} setDangerNotification={setDangerNotification} />)} />
              <Route path="/login" element={isNotAuth(<Login />)} />
              <Route path="/register" element={isNotAuth(<Register />)} />
              <Route path="/weight" element={isAuth(<WeightHome />)} />
                <Route path="/weight/weightGraph" element={isAuth(<WeightGraph />)} />
              <Route path="/healthGoals" element={isAuth(<HealthGoal />)} />
            </Routes>
          </div>
        </div>
    </div>
  );
}

export default connect(null, null)(App);