import React, { Component } from 'react';

class Login extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col text-center">
            <h1 className="login-brand">MEMERanker</h1>
          </div>
        </div>
        <div className="row">
          <div className="col text-center">
            <form>
              <div className="form-group">
                <input type="username" className="form-control" aria-describedby="userneameHelp" placeholder="username"></input>
              </div>
              <div className="form-group">
                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="password"></input>
              </div>
            </form>
          </div>
        </div>
        <div className="row">
          <div className="col text-center">
            <button type="button" id="login-btn" className="btn btn-outline-secondary btn-lg">Log in</button>
          </div>
        </div>
        <div className="row">
          <div className="col text-center">
            <div><a id="sign-link" href="#">Need an account?</a></div>
          </div>
        </div>
      </div>
    );
  }

}

export default Login;