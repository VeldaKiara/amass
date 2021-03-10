import "../assets/styles/Midsect.css";
import event from '../assets/images/event1.png';
import { Link } from "react-router-dom";
const Midsect = () =>{
    return(
<div className="mid"> 
<div className="sect"> 
<h1>Communities</h1>
<Link to="/communities" className="other-pages">More Communities</Link>
<div className="grid-container">
<div className="Card3-mid">
   <img src={event} alt="event"></img>
   <div className="overlay-mid">
     <div className="line"><h2 style={{marginTop:"-3em"}}className="title">She Code Africa Nairobi</h2></div>
     <div className="content">
     <p style={{marginLeft:"1em"}}>
       You are always told to code as if the next developer after you is going to be a psycopath
         that knows where you live. <br/> We aim to promote readable and better code.<br/>Join our community and learn, network and most of all, have fun.            
     </p>
     <a href=" " className="read">Read More</a>
     </div>
   </div>
 </div>
 <div className="Card3-mid">
   <img src={event} alt="event"></img>
   <div className="overlay-mid">
     <div className="line"><h2 style={{marginTop:"-3em"}} className="title">Python Developers Nairobi</h2></div>
     <div className="content">
     <p style={{marginLeft:"1em"}}>
       You are always told to code as if the next developer after you is going to be a psycopath
         that knows where you live. <br/> We aim to promote readable and better code.<br/>Join our community and learn, network and most of all, have fun.            
     </p>
     <a href=" " className="read">Read More</a>
    </div>
   </div>
 </div>

 <div className="Card3-mid">
   <img src={event} alt="event"></img>
   <div className="overlay-mid">
     <div className="line"><h2 style={{marginTop:"-3em"}}className="title">AnitaBorg Nairobi</h2></div>
     <div className="content">
     <p style={{marginLeft:"1em"}}>
       You are always told to code as if the next developer after you is going to be a psycopath
         that knows where you live. <br/> We aim to promote readable and better code.<br/>Join our community and learn, network and most of all, have fun.            
         </p>
         <a href=" " className="read">Read More</a>
     </div>
   </div>
 </div>

  </div>
</div>
</div>
 

    )
}
export default Midsect;