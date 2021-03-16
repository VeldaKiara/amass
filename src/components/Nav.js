import "../assets/styles/Navbar.css";
import logo from '../assets/images/logo.png';
import conference from '../assets/images/conference.svg';
import { Link} from "react-router-dom";
const Nav = ()=>{
    return(
  <div> 
      <div className="navbar-nav"> 
      <div className="logo-nav">
      <img src={logo} alt="logo" className="logo-nav"></img>
      </div>
      <ul className="signlog"> 
      <li><Link to="/login" className="alink"> Log in </Link></li> &nbsp;&nbsp;
      <li><Link to="/signup"  className="alink"> Sign Up</Link></li>
      </ul>
      </div>
      
      <div className="header"> 
      <div className="col left-col">
          <h1>Discover tech events</h1> &nbsp;
          <Link to="/signup" className="btn-btn">Join Amass</Link>
          </div>
      <div className="col">
            <img src={conference} alt="conference" className="ill-img"></img>
        </div>
        </div>
      {/* <div className="ilustration"> 
      <img src={conference} alt="conference" className="ill-img"></img>
      </div> 
      <br/>
      <div className="belowl">
      <h1> Discover tech events </h1> <br/>
      </div>
      <div className="btn">
      <Link to="/signup" className="btn-btn">Join Amass</Link>
      </div>
       */}
      </div>
    )
}


export default Nav;