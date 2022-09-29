import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';

import Water from './components/Water/Water';
import Food from './components/Food/Food';
import Exercise from './components/Exercise/Exercise';


function App() {
  return (
    <div className="App">
      <NavBar />
      <Water />
      <Exercise />
      <Food />
    </div>
  );
}

export default App;
