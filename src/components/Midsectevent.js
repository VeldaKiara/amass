import "../assets/styles/Midsectevent.css";
import {CalendarIcon, LocationIcon} from "@primer/octicons-react";
import { Link } from "react-router-dom";
const Midsectevent = () =>{
    return(
<div className="title-event">
  <div className="header-linked">
    <h1> Events </h1>
    <Link to="/events" className="other-pages-event"> More Events</Link>
  </div>
<div className="grid-container2">
<div className="Card2 ">
<div className="overlay">
<h2 className="title">Hello Python Bootcamp</h2>
<Link className="link" to="/rsvp">RSVP</Link>&nbsp;
<Link className="link" to="/events">Know More</Link>
  </div>
  <div className="textinevent">
<h3>Hello Python Bootcamp</h3> 
<p className="p">by She Code Africa Nairobi</p><br/>
<div className="label">
<span className="label success">Free</span>
</div>
<CalendarIcon size={24} className="icon"/><p className="txt">22 - 24 April 2021 <br/> 11am to 2 pm</p> <br/>
<LocationIcon size={24} className="icon" /> <p className="txt">Conference Hall <br/> Good place, Pritt road</p>
</div>
  </div>
 
<div className="Card2 ">
<div className="overlay">
    <h2 className="title">Weekly Code Meet</h2>
    <Link className="link" to="/rsvp">RSVP</Link>&nbsp;
    <Link className="link" to="/events">Know More</Link>
  </div>
  <div className="textinevent">
<h3>Weekly Code Meet</h3> 
<p className="p">by Python Developers Nairobi</p><br/>
<div className="label">
<span className="label danger">Ksh 1 </span>
</div>
<CalendarIcon size={24} className="icon"/><p className="txt">22 - 24 April 2021 <br/> 11am to 2 pm</p><br/>
<LocationIcon size={24} className="icon" /> <p className="txt">Ihub <br/> Senteu Plaza </p>
</div>
  </div>

  <div className="Card2 ">
<div className="overlay">
    <h2 className="title">Open Source Design </h2>
    <Link className="link" to="/rsvp">RSVP</Link>&nbsp;
    <Link className="link" to="/events">Know More</Link>
 </div>
 <div className="textinevent">
<h3>Design Fair</h3> 
<p className="p">by AnitaBorg Nairobi</p><br/>
<div className="label">
<span className="label success">Free</span>
</div>
<CalendarIcon size={24} className="icon"/><p className="txt">22 - 24 April 2021 <br/> 11am to 2 pm </p><br/>
<LocationIcon size={24} className="icon" /> <p className="txt">Radisson Blu <br/> Upper Hill</p>
</div>
  </div>

  <div className="Card2">
<div className="overlay">
    <h2 className="title">Data Structures Interview Prep</h2>
    <Link className="link" to="/rsvp">RSVP</Link>&nbsp;
    <Link className="link" to="/events">Know More</Link>
  </div>
  <div className="textinevent">
<h3>Data Structures Interview Prep</h3> 
<p className="p">by Open Source Africa Nairobi</p><br/>
<div className="label">
<span className="label danger">Ksh 1 </span>
</div>
<CalendarIcon size={24} className="icon"/><p className="txt">22 - 24 April 2021 <br/> 11am to 2 pm </p> <br/>
<LocationIcon size={24} className="icon" /> <p className="txt">IHIT <br/> Kilimani </p>
</div>
  </div>

</div>
</div>
        
    )
}
export default Midsectevent;