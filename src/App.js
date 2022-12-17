import './App.css';
import { HashRouter, Route, Redirect } from 'react-router-dom';
import Home from './screens/Home';
import Login from './screens/Login';
import Card from './screens/Card';

const token  =  "5d2272df-24bd-4cdc-a681-4c8ae7722c85";

function App() {
  console.log(sessionStorage)
  return (
    <HashRouter>{!sessionStorage.auth &&(
      <Redirect to="/Login"/>
    )}
      <Route exact path="/" component={Home}/>
      <Route path="/Login" component={Login} />
      <Route path="/Card" component={Card} />
    </HashRouter>
  );
}

export default App;
