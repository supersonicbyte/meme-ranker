import React, { Component } from 'react';


function Signup(props) {
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
                            <input type="e-mail" className="form-control" aria-describedby="emailHelp" placeholder="e-mail"></input>
                        </div>
                        <div className="form-group">
                            <input type="username" className="form-control" aria-describedby="usernameHelp" placeholder="username"></input>
                        </div>
                        <div className="form-group">
                            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="password"></input>
                        </div>
                        <div className="form-group">
                            <input type="password" className="form-control" id="repeatInputPassword1" placeholder="repeat password"></input>
                        </div>
                        <div className="form-group">
                            <label for="exampleInputFile">Profile photo</label>
                            <input type="file" className="form-control-file" id="exampleInputFile" aria-describedby="fileHelp"></input>
                            <small id="fileHelp" className="form-text text-muted">Upload yout avatar!.</small>
                        </div>
                    </form>
                </div>
            </div>
            <div className="row">
                <div className="col text-center">
                    <button type="button" id="signup-btn" className="btn btn-outline-secondary btn-lg">Sign up</button>
                </div>
            </div>
            <div className="row">
                <div className="col text-center">
                    <div><a id="sign-link" href="/login">Already have an account? Log in</a></div>
                </div>
            </div>
        </div>

    );
}
export default Signup;