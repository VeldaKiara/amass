import "../assets/styles/Forgotpwd.css";
import { Link } from "react-router-dom";
const Forgotpwd =()=>{
    return(

<div className="forgotpwd-page">
  <div className="forgotpwd-form ">
    <form className="login-form">
      <input type="text" placeholder="email"/>
      <button>Submit</button>
    </form>
  </div>
</div>



    )
};

export default Forgotpwd;