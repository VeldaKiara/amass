import "../assets/styles/Createvents.css";
// import { Link } from "react-router-dom";
import { useState } from 'react';
import {eventCreation} from '../api/auth';
import { withRouter} from "react-router-dom";
import { connect } from 'react-redux';
import { useHistory } from "react-router-dom";

const mapStateToProps = (state) => {
  return {
    v:state.user.token
  }
}
const Createvents = (props) => {
  const [eventname, setEventName] = useState("")
  const [eventlocation, setEventLocation] = useState("")
  const [eventdescription, setEventDescription] = useState("")
  const [eventstarttime, setEventStarttime] = useState("")
  const[eventendtime, setEventEndtime] = useState("")
  const [eventticket, setEventTicket] = useState("")
  const history = useHistory();

  
  const changeEventname = event => {
    setEventName(event.target.value)
  }
  const changeEventlocation = event => {
    setEventLocation(event.target.value)
  }
  const changeEventdescription = event => {
    setEventDescription(event.target.value)
  }
  const changeEventstartTime = event => {
    setEventStarttime(event.target.value)
  }
  const changeEventendtime = event => {
    setEventEndtime(event.target.value)
  }
  const changeEventticket = event => {
    setEventTicket(event.target.value)
  }
  
   const eventCreate = (event)=>{
     return(
      eventCreation(
        props.v,
        {
         name:eventname,
         location:eventlocation,
         description:eventdescription,
         eventstarttime:eventstarttime,
         eventendtime:eventendtime,
         cost:eventticket,
        },
        result => {
          console.log(result)
          if (result.status ==='success'){
            console.log("Hi")
            history.push('/events')

          }
          else{
            console.log("else")
            alert("event could not be created")
          }
        }
        
        )
     )
   }
    return(
        <div className="createvents-page">
  <div className="form">
    <form>
      <input type="text" placeholder="event name" onChange={changeEventname} value={eventname}/>
      <input type="text" placeholder="event location" onChange={changeEventlocation} value={eventlocation}/>
      <textarea
          placeholder="event description"
          rows={7}
          cols={7}
          onChange={changeEventdescription} 
          value={eventdescription}/>
    <input type="time" placeholder="starttime" onChange={changeEventstartTime} value={eventstarttime}/>
    <input type="time" placeholder="endtime" onChange={changeEventendtime} value={eventendtime}/>
    <input type="number" placeholder="price of tickets, if free indicate 0"onChange={changeEventticket} value={eventticket}/>
      <button onClick={eventCreate} type="button">Create</button>
    </form>
  </div>
</div>
    )
}

// export default Createvents
export default connect(mapStateToProps)(withRouter(Createvents));