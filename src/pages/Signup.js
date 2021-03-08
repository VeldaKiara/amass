import "../assets/styles/Login.css";
import { Link } from "react-router-dom";
const Signup = () =>{
    return(
<div className="login-page">
<div className="form">
<form className="login-form">
     <input type="text" placeholder="name"/>
      <input type="text" placeholder="email address"/>
      <input type="password" placeholder="password"/>
      <button>Sign up</button>
      <p className="message">Already registered? <Link to="/login">Log in</Link></p>
    </form>
            </div>
            </div> 
    )
}
export default Signup;
