import './App.css';
import { BrowserRouter as Router, Route , Routes} from 'react-router-dom';
import Home from './screens/Home';
import Login from './screens/Login';
import Card from './screens/Card';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/Login" element={<Login/>}></Route>
          <Route path="/Card" element={<Card/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
