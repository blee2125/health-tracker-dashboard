import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import {
  BrowserRouter,
  Routes,
  Route,
  //Link,
} from "react-router-dom";

import Water from './components/Water/Water';
import Food from './components/Food/Food';
import Exercise from './components/Exercise/Exercise';
import HomePage from './views/Home';


function App() {
  return (
    <div className="App">
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/water" element={<Water />} />
          <Route path="/exercise" element={<Exercise />} />
          <Route path="/food" element={<Food />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
