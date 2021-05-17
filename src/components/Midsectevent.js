import "../assets/styles/Midsectevent.css";
import {CalendarIcon, LocationIcon,ClockIcon} from "@primer/octicons-react";
import { Link } from "react-router-dom";
import {eventList} from "../api/auth";
import React, { useState, useEffect } from "react";

import Moment from 'react-moment';
import 'moment-timezone';

const Midsectevent = () =>{

  const [midsectevent, setMidsectevent] = useState([])
  
  useEffect (() =>{
  
    eventList(res=>{
      setMidsectevent(res.result)

    })

},[])

    return(
<div className="title-event">
  <div className="header-linked">
    <h1> Events </h1>
    <Link to="/events" className="other-pages-event"> More Events</Link>
  </div>
<div className="grid-container2">
{midsectevent.map((value, index) => {
const timez=Intl.DateTimeFormat().resolvedOptions().timeZone
return (        
      

<div className="Card2 ">
<div className="overlay">
<h2 className="title">{value.name}</h2>
<Link className="link" to={`/rsvp/${value.id}`} >RSVP</Link>&nbsp;
<Link className="link" to="/events">Know More</Link>
  </div>
  <div className="textinevent">
<h3>{value.name}</h3> 
<p className="p">by {value.detailed_user.username}</p><br/>
<div className="label">
<span className="label success">Ksh {value.cost}</span>
</div>
 
<CalendarIcon size={24} className="icon-event-page"/> <br/>&nbsp;&nbsp;&nbsp;
        <Moment className="datetime" format="Do MMMM YYYY" tz={timez}>
          {value.event_time}
          </Moment> 
          <ClockIcon size={24} className="icon-event-page-time"/> <br/>
          <p className="txt-event-page"> <br/>
          <Moment className="datetime" format="h:mm a" tz={timez}> 
           {value.event_time}
          </Moment>
          </p>
          <br/>
        <LocationIcon size={24} className="icon-event-page" /> <p className="txt-event-page">{value.location} <br/> </p>
        <div>
          <Link to={`/rsvp/${value.id}`} className="rsvp-events">RSVP</Link>
        </div>

{/* <CalendarIcon size={24} className="icon"/><p className="txt">22 - 24 April 2021 <br/> 11am to 2 pm</p> <br/>
<LocationIcon size={24} className="icon" /> <p className="txt">Conference Hall <br/> Good place, Pritt road</p> */}
</div>
  </div>
// {/*  
// <div className="Card2 ">
// <div className="overlay">
//     <h2 className="title">Weekly Code Meet</h2>
//     <Link className="link" to="/rsvp">RSVP</Link>&nbsp;
//     <Link className="link" to="/events">Know More</Link>
//   </div>
//   <div className="textinevent">
// <h3>Weekly Code Meet</h3> 
// <p className="p">by Python Developers Nairobi</p><br/>
// <div className="label">
// <span className="label danger">Ksh 1 </span>
// </div>
// <CalendarIcon size={24} className="icon"/><p className="txt">22 - 24 April 2021 <br/> 11am to 2 pm</p><br/>
// <LocationIcon size={24} className="icon" /> <p className="txt">Ihub <br/> Senteu Plaza </p>
// </div>
//   </div> */}

//   {/* <div className="Card2 ">
// <div className="overlay">
//     <h2 className="title">Open Source Design </h2>
//     <Link className="link" to="/rsvp">RSVP</Link>&nbsp;
//     <Link className="link" to="/events">Know More</Link>
//  </div>
//  <div className="textinevent">
// <h3>Design Fair</h3> 
// <p className="p">by AnitaBorg Nairobi</p><br/>
// <div className="label">
// <span className="label success">Free</span>
// </div> */}
// {/* <CalendarIcon size={24} className="icon"/><p className="txt">22 - 24 April 2021 <br/> 11am to 2 pm </p><br/>
// <LocationIcon size={24} className="icon" /> <p className="txt">Radisson Blu <br/> Upper Hill</p>
// </div>
//   </div>

//   <div className="Card2">
// <div className="overlay">
//     <h2 className="title">Data Structures Interview Prep</h2>
//     <Link className="link" to="/rsvp">RSVP</Link>&nbsp;
//     <Link className="link" to="/events">Know More</Link>
//   </div>
//   <div className="textinevent">
// <h3>Data Structures Interview Prep</h3> 
// <p className="p">by Open Source Africa Nairobi</p><br/>
// <div className="label">
// <span className="label danger">Ksh 1 </span>
// </div>
// <CalendarIcon size={24} className="icon"/><p className="txt">22 - 24 April 2021 <br/> 11am to 2 pm </p> <br/>
// <LocationIcon size={24} className="icon" /> <p className="txt">IHIT <br/> Kilimani </p>
// </div>
//   // </div> */}
)
})}

</div>
</div>
        
    )
}
export default Midsectevent;