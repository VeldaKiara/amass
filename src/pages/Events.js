import "../assets/styles/Events.css";
import {CalendarIcon, LocationIcon} from "@primer/octicons-react";
import { Link } from "react-router-dom";
import {eventList} from "../api/auth";
import React, { useState, useEffect } from "react";





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

  return (
    <div className="Card2-event-page ">
      <div className="textinevent-event-page">
        <h3>{value.name }</h3> 
        <p className="p">by {value.detailed_user.username}</p><br/>
        <div className="label">
          <span className="label success">Ksh {value.cost}</span>
        </div>
        <CalendarIcon size={24} className="icon-event-page"/><p className="txt-event-page">{value.event_time}<br/> {value.event_time}</p> <br/>
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