import React from 'react';
import Home from './components/Home';
import Login from './components/Login';
import Entry from './components/Entry';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

const App = function(props) {
    return(
      <div className="App">
        <Router basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route exact path="/" render={props => <Home {...props}/>}>
            
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route exact path="/flower-quiz" render={props => <Entry {...props}/>}>

          </Route>
          <Route exact path="/animal-quiz" render={props => <Entry {...props}/>}>
          
          </Route>
          <Route exact path="/color-quiz" render={props => <Entry {...props}/>}>

          </Route>
        </Switch>
      </Router>
      </div>
    )
}

export default App;