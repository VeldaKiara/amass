import "../assets/styles/Midsectevent.css";
import {CalendarIcon, LocationIcon} from "@primer/octicons-react";
const Midsectevent = () =>{
    return(
<div className="title">
<h1> Events </h1>
<a href=" " className="other-pages"> More Events</a>
<div className="grid-container">
<div className="Card2 ">
<div className="overlay">
<h2 className="title">Hello Python Bootcamp</h2>
<a className="link" href=" ">RSVP</a>&nbsp;
<a className="link" href=" ">Know More</a>
  </div>
  <div className="textinevent">
<h3>Hello Python Bootcamp</h3> 
<p>by She Code Africa Nairobi</p><br/>
<CalendarIcon size={24} className="icon"/><p className="txt">22 - 24 April 2021 <br/> 11am to 2 pm</p> <br/>
<LocationIcon size={24} className="icon" /> <p className="txt">Conference Hall <br/> Good place, Pritt road</p>
</div>
  </div>
 
<div className="Card2 ">
<div className="overlay">
    <h2 className="title">Weekly Code Meet</h2>
    <a className="link" href=" ">RSVP</a>&nbsp;
    <a className="link" href=" ">Know More</a>
  </div>
  <div className="textinevent">
<h3>Weekly Code Meet</h3> 
<p>by Google Developers Group Nairobi</p><br/>
<CalendarIcon size={24} className="icon"/><p className="txt">22 - 24 April 2021 <br/> 11am to 2 pm</p><br/>
<LocationIcon size={24} className="icon" /> <p className="txt">Ihub <br/> Senteu Plaza </p>
</div>
  </div>

  <div className="Card2 ">
<div className="overlay">
    <h2 className="title">Open Source Design </h2>
    <a className="link" href=" ">RSVP</a>&nbsp;
    <a className="link" href=" ">Know More</a>
 </div>
 <div className="textinevent">
<h3>Design Fair</h3> 
<p>by AnitaBorg Nairobi</p><br/>
<CalendarIcon size={24} className="icon"/><p className="txt">22 - 24 April 2021 <br/> 11am to 2 pm </p><br/>
<LocationIcon size={24} className="icon" /> <p className="txt">Radisson Blu <br/> Upper Hill</p>
</div>
  </div>

  <div className="Card2">
<div className="overlay">
    <h2 className="title">Data Structures Interview Prep</h2>
    <a className="link" href=" ">RSVP</a>&nbsp;
    <a className="link" href=" ">Know More</a>
  </div>
  <div className="textinevent">
<h3>Data Structures Interview Prep</h3> 
<p>by She Code Africa Nairobi</p><br/>
<CalendarIcon size={24} className="icon"/><p className="txt">22 - 24 April 2021 <br/> 11am to 2 pm </p> <br/>
<LocationIcon size={24} className="icon" /> <p className="txt">IHIT <br/> Kilimani </p>
</div>
  </div>

</div>
</div>
        
    )
}
export default Midsectevent;