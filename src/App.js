import './App.css';
import { HashRouter, Route } from 'react-router-dom';
import Home from './screens/Home';
import Login from './screens/Login';
import Card from './screens/Card';
import { useEffect, useState } from 'react';

const token  =  "5d2272df-24bd-4cdc-a681-4c8ae7722c85";

function App() {
  let [auth, setAuth] = useState(localStorage.length == 0)
  useEffect(() => {(
    async () =>{
      if(localStorage.length == 0){
        setAuth(false)
      }
      else{
        setAuth(true)
      }
    }
  )();
  }, [localStorage.length])
  console.log(localStorage)
  console.log(auth)
  return (
    <HashRouter>
      <Route exact path="/" component={() => <Home autorizado={auth}/>}/>
      <Route path="/Login" component={() => <Login autorizado={auth}/>} />
      <Route path="/Card" component={Card} />
    </HashRouter>
  );
}

export default App;
