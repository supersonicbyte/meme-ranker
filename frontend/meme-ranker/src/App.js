import React, { useState, useCallback } from 'react';
import './style.css';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import Login from './components/LoginComponent';
import Signup from './components/SignupComponent';
import Navbar from './components/NavbarComponent';
import Home from './components/HomeComponent';
import Profile from './components/ProfileComponent';
import Create from './components/CreateComponent';
import { AuthContext } from './components/context/AuthContext';



function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = useCallback(() => {
    setIsLoggedIn(true);
  }, []);

  const logout = useCallback(() => {
    setIsLoggedIn(false);
  }, []);

  let routes;

  if (isLoggedIn) {
    routes = (
      <React.Fragment>
        <Route path="/home" exact component={Home}></Route>
        <Route path="/profile" component={Profile}></Route>
        <Route path="/create" component={Create}></Route>
      </React.Fragment>
    );
  }
  else {
    routes = (
      <React.Fragment>
        <Route path="/login" exact component={Login}></Route>
        <Route path="/signup" exact component={Signup}></Route>
        <Route path="/home" exact component={Home}></Route>
        <Redirect to="/login" component={Login}></Redirect>
      </React.Fragment>

    );
  }

  return (
    <div className="App">
      <AuthContext.Provider value={{ isLoggedIn: isLoggedIn, login: login, logout: logout }}>
        <Router>
          <Navbar></Navbar>
          <Switch>
            {routes}
          </Switch>
        </Router>
      </AuthContext.Provider>
    </div>
  );
}

export default App;
