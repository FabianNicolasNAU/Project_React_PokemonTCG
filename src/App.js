import './App.css';
import { HashRouter, Route } from 'react-router-dom';
import Home from './screens/Home';
import Login from './screens/Login';
import Card from './screens/Card';

const token  =  "5d2272df-24bd-4cdc-a681-4c8ae7722c85";

function App() {
<<<<<<< HEAD
  let auth = false
  if(localStorage.auth) auth = true
  else{
    auth = false
    
  } 
=======
>>>>>>> 93a0756854bf758155ac7d20424a2991f1a78e98
  return (
    <HashRouter>
      <Route exact path="/" component={() => <Home autorizado={auth}/>}/>
      <Route path="/Login" component={() => <Login autorizado={auth}/>} />
      <Route path="/Card" component={Card} />
    </HashRouter>
  );
}

export default App;
