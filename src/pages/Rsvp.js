import "../assets/styles/Rsvp.css";
import mpesa from '../assets/images/mpesa.svg';
const Rsvp = () =>{
    return(
<div className="mainContainer">
  <div className="cardHolder">
    <div className="header">
      <div className="heading center">RSVP</div>
      {/* <div className="stepHeading center">Payment Method</div> */}
      <div className="card">
        <div className="top part">
          <img src={mpesa} alt="mpesa"></img>
        </div>
        <div>
        <form className="login-form">
     <input type="text" placeholder="name"/>
      <input type="text" placeholder="email address"/>
      <input type="tel" placeholder="+254 712-345-678" pattern="+254 [0-9]{3}-[0-9]{3}-[0-9]{3}" required/>

    </form>
        </div>
        {/* <div className="middle part">
          <div className="infoheader vcenter">CARD NUMBER</div>
          <div className="infocontent number vcenter">
            <div className="num center">****</div>
            <div className="num center">****</div>
            <div className="num center">4658</div>
            <div className="num center">****</div>
          </div>
        </div>
        <div className="bottom part">
          <div className="holderInfo">
             <div className="infoheader vcenter">CARD HOLDER</div>
            <div className="infocontent name vcenter">JOHN DOE</div>
          </div>
          <div className="expDate">
            <div className="infoheader vcenter">EXP. DATE</div>
            <div className="infocontent date vcenter">09/2023</div>
          </div>
        </div>
      </div>
    </div>
  </div> */}
  <div className="status vcenter"> <i className="fa fa-check" aria-hidden="true"></i>
    Option : M-Pesa(mobile money)
  </div>
  <div>

 </div>
  {/* <h5 className="center">OTHER PAYMENT OPTIONS</h5>
  <div className="options vcenter">
    <div className="opt">
      <div className="icon center">
        <i className="fa fa-money" aria-hidden="true"></i>
      </div>
      <div className="optname center">COD</div>
    </div>
     <div className="opt">
      <div className="icon center">
        <i className="fa fa-btc" aria-hidden="true"></i>
      </div>
      <div className="optname center">BitCoin</div>
    </div>
     <div className="opt">
      <div className="icon center">
        <i className="fa fa-google-wallet" aria-hidden="true"></i>
      </div>
      <div className="optname center">E-Wallet</div>
    </div>
  </div> */}
  <div className="payment vcenter">
    <div className="amount">
      <div className="infoheader vcenter">Total Amount</div>
      <div className="infocontent val vcenter">ksh 1</div>
    </div>
    <div className="button center">checkout</div>
  </div>
</div>

</div>
</div>
</div>


    )
   
}
export default Rsvp