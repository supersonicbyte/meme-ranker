import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import './login.css';



class LoginComponent extends Component{
      render(){
       return (
        <form className="Login" noValidate autoComplete="off">
        <TextField id="outlined-basic" label="Username" variant="outlined"/>
        <TextField id="standard-password-input" label="Password" type="password" variant="outlined" />

        
      </form>
       );
    }
}
export default LoginComponent;

