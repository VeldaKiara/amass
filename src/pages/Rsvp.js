import "../assets/styles/Rsvp.css";
import { useState } from 'react';
import {rsvpApi} from '../api/auth'

import { useHistory } from "react-router-dom";

const Rsvp = (props) =>{
const [tel, setTel] = useState("")
const [number,setNumber] = useState("")
const history = useHistory();

const changeTel = event => {
    setTel(event.target.value)
  }
  const changeNumber = event => {
    setNumber(event.target.value)
  }
  const doRsvp = event => {
      rsvpApi({phone_number:tel, events:props.match.params.id,number:number}, callb=>{
        if (callb.status === "success"){
           
          alert("You're going to this event")
          history.push('/events')   


          }
          else{
            console.log(callb)
          }  
      })
  }
    return(
<div>
<div className="rsvp-page">
<div className="rsvp-form">
<form className="login-form">
     {/* <input type="text" placeholder="name"/>
      <input type="text" placeholder="email address"/> */}     
      <input name='event_id' value={props.match.params.id} type="hidden"/>

      <input type="tel"  value={tel} placeholder="+254 712-345-678" pattern="+254 [0-9]{3}-[0-9]{3}-[0-9]{3}" required onChange={changeTel} />
      <input type="number" value={number} className="quantity" placeholder='tickets' min="1" max="10" onChange={changeNumber} ></input>

      <button onClick={doRsvp} type="button">RSVP</button>
    </form>
            </div>
            </div> 

</div>


    )
   
}
export default Rsvp