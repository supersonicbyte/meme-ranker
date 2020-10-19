import React, { Component } from 'react';
import { useForm } from 'react-hook-form';


function Signup(props) {
    const { register, handleSubmit, errors, getValues } = useForm();
    const onSubmit = (data) => console.log(data);

    const validateRepeatPassword = (passRepeat) => {
        const pass = getValues("password");
        if(pass === passRepeat) return true;
        return false;
    }

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col text-center">
                    <h1 className="login-brand">MEMERanker</h1>
                </div>
            </div>
            <div className="row">
                <div className="col text-center">
                    <form id="registerForm" onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-group has-danger">
                            {errors.email && <div style={{ display: "block" }} className="invalid-feedback">Please enter an valid e-mail!</div>}
                            <input type="e-mail" name="email" ref={register({ required: true })} className={"form-control" + (errors.email ? " has-danger" : " ")} aria-describedby="emailHelp" placeholder="e-mail"></input>
                        </div>
                        <div className="form-group">
                            {errors.username && <div style={{ display: "block" }} className="invalid-feedback">Minimal lenght is 4!</div>}
                            <input type="username" className="form-control" name="username" ref={register({ required: true, minLength: 4 })} aria-describedby="usernameHelp" placeholder="username"></input>
                        </div>
                        <div className="form-group">
                            {errors.password && errors.password.type === "minLenght" && <div style={{ display: "block" }} className="invalid-feedback">Minimal lenght is 6!</div>}
                            <input type="password" className="form-control" name="password" ref={register({ required: true, minLength: 6 })} id="exampleInputPassword1" placeholder="password"></input>
                        </div>
                        <div className="form-group">
                            {errors.repeatPassword && errors.repeatPassword.type === "minLenght" && <div style={{ display: "block" }} className="invalid-feedback">Minimal lenght is 4!</div>}
                            {errors.repeatPassword && errors.repeatPassword.type === "validate" && <div style={{ display: "block" }} className="invalid-feedback">Password does not match!</div>}
                            <input type="password" className="form-control" name="repeatPassword" ref={register({ required: true, minLength: 6, validate: validateRepeatPassword })} id="repeatInputPassword1" placeholder="repeat password"></input>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputFile">Profile photo</label>
                            <input type="file" className="form-control-file" name="image" ref={register} id="exampleInputFile" aria-describedby="fileHelp"></input>
                            <small id="fileHelp" className="form-text text-muted">Upload yout avatar!.</small>
                        </div>
                    </form>
                </div>
            </div>
            <div className="row">
                <div className="col text-center">
                    <button form="registerForm" type="submit" id="signup-btn" className="btn btn-outline-secondary btn-lg">Sign up</button>
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