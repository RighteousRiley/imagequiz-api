import React from 'react';
import Home from './components/Home';
import Login from './components/Login';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

const App = function(props) {
    return(
      <div className="App">
        <Router>
        <Switch>
          <Route path="/" render={props => <Home {...props}/>}>
            
          </Route>
          <Route path="/login">
            <Login />
          </Route>
        </Switch>
      </Router>
      </div>
    )
}

export default App;