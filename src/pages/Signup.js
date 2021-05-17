import "../assets/styles/Login.css";
import { Link } from "react-router-dom";
import {doSignup} from '../api/auth';
import {ActionCreators} from '../actions/index';
import { useHistory } from "react-router-dom";
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { withRouter} from "react-router-dom";
const mapStateToProps = (state) => {
    return {
      n: state.user.user.name
    }
  }

const Signup = (props) =>{
    const [username,setUsername] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const history = useHistory()

    const changeUsername = event => {
        setUsername(event.target.value)
      }
  
    const changePassword = event => {
        setPassword(event.target.value)
      }

      const changeEmail = event => {
        setEmail(event.target.value)
      }
    
      const performSignup = event => {
        console.log(username)
        doSignup({username:username, password:password, email:email},result=>{
            // console.log(result)
            if (result.status === true){
              props.dispatch(ActionCreators.setToken(result.result.access))
              history.push('/dashboard')
  
            }
            else{
              alert("could not sign up")
            }
  
  
        })
      
        
      }


    return(
<div className="login-page">
<div className="form">
<form className="login-form">
     <input type="text" value={username} onChange={changeUsername} placeholder="name"/>
      <input type="text" value={email} onChange={changeEmail}placeholder="email address"/>
      <input type="password" value={password} onChange={changePassword}placeholder="password"/>
      <button type="button" onClick={performSignup}>Sign up</button>
      <p className="message">Already registered? <Link to="/login">Log in</Link></p>
    </form>
            </div>
            </div> 
    )

}

export default connect(mapStateToProps)(withRouter(Signup)) ;
