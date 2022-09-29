import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Water from './components/Water/Water';
import Food from './components/Food/Food';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Water glasses="3" />
      <Food />
    </div>
  );
}

export default App;
