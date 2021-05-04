import "../assets/styles/Events.css";
import {CalendarIcon, LocationIcon,ClockIcon } from "@primer/octicons-react";
import { Link } from "react-router-dom";
import {eventList} from "../api/auth";
import React, { useState, useEffect } from "react";

import Moment from 'react-moment';
import 'moment-timezone';


const Events = () =>{

  const [events,setEvents] = useState([])

  useEffect (() =>{
  
        eventList(res=>{
          setEvents(res.result)

        })
  
  },[])
    return( 
<div className="title-event-page">
<h1> Events </h1>
<div className="grid-container2-event-page">

{events.map((value, index) => {
  // time
        const tzzs=Intl.DateTimeFormat().resolvedOptions().timeZone
  return (
    <div className="Card2-event-page ">
      <div className="textinevent-event-page">
        <h3>{value.name }</h3> 
        <p className="p">by {value.detailed_user.username}</p><br/>
        <div className="label">
          <span className="label success">Ksh {value.cost}</span>
        </div>            
        
        
        <CalendarIcon size={24} className="icon-event-page"/> <br/>&nbsp;&nbsp;&nbsp;
        <Moment className="datetime" format="Do MMMM YYYY" tz={tzzs}>
          {value.event_time}
          </Moment> 
          <ClockIcon size={24} className="icon-event-page-time"/> <br/>
          <p className="txt-event-page"> <br/>
          <Moment className="datetime" format="h:mm a" tz={tzzs}> 
           {value.event_time}
          </Moment>
          </p>
          <br/>
        <LocationIcon size={24} className="icon-event-page" /> <p className="txt-event-page">{value.location} <br/> </p>
        <div>
          <Link to={`/rsvp/${value.id}`} className="rsvp-events">RSVP</Link>
        </div>
      </div>
  </div>
  )

})}
 


</div>
</div>


    )
}
export default Events;