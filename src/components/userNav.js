import "../assets/styles/userNav.css";
import logo from '../assets/images/logo.png';
import avatar from '../assets/images/avatar.png';
import { Link} from "react-router-dom";
import {PlusIcon} from '@primer/octicons-react';
const UserNav= ()=>{
    return(
  <div> 
      <div className="navbar-nav"> 
      <div className="logo-nav">
      <img src={logo} alt="logo" className="logo-nav"></img>
      </div>
      <ul className="signlog"> 
      <li><Link to ="/createvents"><PlusIcon size={24} className="plusicon"/></Link></li>
      <li>Create Event</li>&nbsp;&nbsp;
      <li> <img src={avatar} alt="avatar" className="avatar"></img> </li>
      
      </ul>
      </div>
      
        </div>
    )
}


export default UserNav;