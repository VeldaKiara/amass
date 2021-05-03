import "../assets/styles/Rsvp.css";
import rsvp from '../api/auth';
import { useState } from 'react';
import {rsvpApi} from '../api/auth'
const Rsvp = (props) =>{
const [tel, setTel] = useState("")
const [number,setNumber] = useState("")

const changeTel = event => {
    setTel(event.target.value)
  }
  const changeNumber = event => {
    setNumber(event.target.value)
  }
  const doRsvp = event => {
      rsvpApi({phone_number:tel, number:number, events:props.match.params.id}, callb=>{
        if (callb.status === true){
            
            // history.push('/dashboard')

          }
          else{
            alert("error")
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
      <input type="tel"  value={tel}placeholder="+254 712-345-678" pattern="+254 [0-9]{3}-[0-9]{3}-[0-9]{3}" required onChange={changeTel} />
      <input type="number" value={number}className="quantity" placeholder='tickets' min="1" max="10" onChange={changeNumber} ></input>

      <button onClick={doRsvp} type="button">RSVP</button>
    </form>
            </div>
            </div> 

</div>


    )
   
}
export default Rsvp