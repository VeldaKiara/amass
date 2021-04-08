import "../assets/styles/Rsvp.css";
import mpesa from '../assets/images/mpesa.svg';
const Rsvp = () =>{
    return(
<div>
<div className="rsvp-page">
<div className="rsvp-form">
<form className="login-form">
     <input type="text" placeholder="name"/>
      <input type="text" placeholder="email address"/>
      <input type="tel" placeholder="+254 712-345-678" pattern="+254 [0-9]{3}-[0-9]{3}-[0-9]{3}" required />
      <button>RSVP</button>
    </form>
            </div>
            </div> 

</div>


    )
   
}
export default Rsvp