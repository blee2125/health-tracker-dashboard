import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import { Routes, Route } from "react-router-dom";

import Water from './components/Water/Water';
import Food from './components/Food/Food';
import Exercise from './components/Exercise/Exercise';
import HomePage from './views/Home';


function App() {
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

export default App;
