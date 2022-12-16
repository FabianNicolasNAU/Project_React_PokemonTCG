import logo from './logo.svg';
import './App.css';
import { HashRouter, Route, Redirect } from 'react-router-dom';
import Home from './screens/Home';
import Login from './screens/Login';

function App() {
  return (
    <HashRouter>
      <Route exact path="/">
        <Redirect to="/Home" />
      </Route>
      <Route path="/Home" component={Home} />
      <Route path="/Login" component={Login} />
    </HashRouter>
  );
}

export default App;
