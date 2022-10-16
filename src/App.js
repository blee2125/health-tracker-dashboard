import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from './components/NavBar';
import { Routes, Route } from "react-router-dom";

import Water from './components/Water/Water';
import Food from './components/Food/Food';
import Exercise from './components/Exercise/Exercise';
import HomePage from './views/Home';

import { useEffect } from 'react';

import { connect } from 'react-redux'
import { getWaterByDate } from "./reducers/waterSlice";
import ExerciseEdit from './components/Exercise/ExerciseEdit';
import ExerciseAdd from './components/Exercise/ExerciseAdd';

import FoodAdd from './components/Food/FoodAdd';
import FoodEdit from './components/Food/FoodEdit';

import SideBar from './components/SideBar';

function App(props) {
  const dateString = new Date().toString().split(' ')
  const dateStringSplit = (`${dateString[1]} ${dateString[2]} ${dateString[3]}`).toString()

  useEffect(() => {
    handleGetTodayWaterRequest()
      // eslint-disable-next-line
  }, [])

  const handleGetTodayWaterRequest = () => {
    props.getWaterByDate({'time': dateStringSplit})
      .unwrap()
      .then((data) => {
        //console.log(data)
      })
      .catch((e) => {
        console.log(e);
        if (e.typeof === undefined) {
          //handlePostRequest()
        }
      });
  }

  return (
    <div className="App">
      <NavBar />
      <div>
        <SideBar />
        <div className='main'>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/water" element={<Water />} />
            <Route path="/exercise" element={<Exercise />} />
              <Route path="/exercise/edit/:id" element={<ExerciseEdit />} />
              <Route path="/exercise/add" element={<ExerciseAdd />} />
            <Route path="/food" element={<Food />} />
              <Route path="/food/edit/:id" element={<FoodEdit />} />
              <Route path="/food/add" element={<FoodAdd />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default connect(null, { getWaterByDate })(App);
