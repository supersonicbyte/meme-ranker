import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import LoginComponent from './components/LoginComponent/LoginComponent';

function App() {
  return (
    <div className="App">
     <Router>
       <Route path="/login" exact component={LoginComponent}></Route>
       <Route path="/" exact component={LoginComponent}></Route>
     </Router>
    </div>
  );
}

export default App;
