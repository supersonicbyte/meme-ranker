import React from 'react';
import './style.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import LoginComponent from './components/LoginComponent';
import SignupComponent from './components/SignupComponent';
import Navbar from './components/NavbarComponent';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
    <Router>
       <Route path="/login" exact component={LoginComponent}></Route>
       <Route path="/signup" exact component={SignupComponent}></Route>

     </Router>
    </div>
  );
}

export default App;
