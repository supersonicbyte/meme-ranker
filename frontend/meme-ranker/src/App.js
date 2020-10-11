import React from 'react';
import './style.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import LoginComponent from './components/LoginComponent';
import SignupComponent from './components/SignupComponent';
import Navbar from './components/NavbarComponent';
import Home from './components/HomeComponent';

function App() {
  return (
    <div className="App">
    <Router>
    <Navbar></Navbar>
    <Switch>
       <Route path="/login" exact component={LoginComponent}></Route>
       <Route path="/signup" exact component={SignupComponent}></Route>
       <Route path="/home" exact component={Home}></Route>
       </Switch>
     </Router>
    </div>
  );
}

export default App;
