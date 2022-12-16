import './App.css';
import { HashRouter, Route, Redirect } from 'react-router-dom';
import Home from './screens/Home';
import Login from './screens/Login';
import Card from './screens/Card';

function App() {
  return (
    <HashRouter>
      <Route exact path="/" component={Home}/>
      <Route path="/Login" component={Login} />
      <Route path="/Card" component={Card} />
    </HashRouter>
  );
}

export default App;
