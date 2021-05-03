import "../assets/styles/Login.css";
import { Link } from "react-router-dom";
import { withRouter} from "react-router-dom";
import { connect } from 'react-redux';
import React, { useState } from 'react';

import {doLogin} from '../api/auth'
import {ActionCreators} from '../actions/index';
import { useHistory } from "react-router-dom";


const mapStateToProps = (state) => {
  return {
    n: state.user.user.name
  }
}


const Login =(props)=>{

    const [username,setUsername] = useState("")
    const [password,setPassword] = useState("")
    const history = useHistory();


    const changeUsername = event => {
      setUsername(event.target.value)
    }

    const changePassword = event => {
      setPassword(event.target.value)
    }

    const performLogin = event => {
      console.log(username)
      doLogin({username:username, password:password},result=>{
          // console.log(result)
          if (result.status === true){
            props.dispatch(ActionCreators.setToken(result.result.access))
            history.push('/dashboard')

          }
          else{
            alert("invalid username or password")
          }


      })
    
      
    }

    return(
      
    <div className="login-page">
      <div className="form">
        <form className="login-form">
          {/* {props.n} */}
          <input type="text" value={username} onChange={changeUsername} placeholder="username"/>
          <input type="password" value={password} onChange={changePassword} placeholder="password"/>
          <button type="button" onClick={performLogin}>login</button>
          <p className="message">Not registered? <Link to="/signup">Create an account</Link></p>
          <p className="message">Forgot password? <Link to="/forgotpwd">Forgot password</Link></p>

        </form>
      </div>
    </div>  
    )
};


export default connect(mapStateToProps)(withRouter(Login));