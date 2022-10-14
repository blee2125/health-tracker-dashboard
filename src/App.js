import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import { Routes, Route } from "react-router-dom";

import Water from './components/Water/Water';
import Food from './components/Food/Food';
import Exercise from './components/Exercise/Exercise';
import HomePage from './views/Home';

import { useEffect } from 'react';

import { connect } from 'react-redux'
import { getWaterByDate } from "./reducers/waterSlice";


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
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/water" element={<Water />} />
        <Route path="/exercise" element={<Exercise />} />
        <Route path="/food" element={<Food />} />
      </Routes>
    </div>
  );
}

export default connect(null, { getWaterByDate })(App);
