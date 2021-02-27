import "../assets/styles/Navbar.css";
import logo from '../assets/images/logo.png';
import conference from '../assets/images/conference.svg';
const Nav = ()=>{
    return(
      <div> 
      <div className="logo"> 
      <img src={logo} alt="logo" className="logoimg"></img>
      </div>
      <div className="signlog"> 
      <a href=" "> Log in </a> &nbsp;&nbsp;
      <a href=" "> Sign Up</a> 
      </div>
      <div className="ilustration"> 
      <img src={conference} alt="conference" className="ill-img"></img>
      </div> 
      <br/>
      <div className="belowl">
      <h1> Discover tech events </h1> <br/>
      </div>
      <div className="btn">
      <a href=" " className="btn-btn">Join Amass</a>
      </div>
      
      </div>
    )
}

export default Nav;