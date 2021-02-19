import './App.css';
import Login from './Components/Login/Login'
import Register from './/Components/Register/Register'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <Router>
      <div className="app">

        <Switch>

          <Route path="/login">
            <Login />
          </Route>

          <Route path="/register">
            <Register />
          </Route>

        </Switch>
      </div>
    </Router>
  );
}

export default App;
