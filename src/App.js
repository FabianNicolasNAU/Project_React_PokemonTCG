import logo from './logo.svg';
import './App.css';
import Home from './views/Home';
import Login from './screens/Login';

function App() {
  return (
    <HashRouter>
      <Navigation />
      <Route path="/home" component={Home} />
      <Route path="/login" component={Login} />
    </HashRouter>
  );
}

export default App;
