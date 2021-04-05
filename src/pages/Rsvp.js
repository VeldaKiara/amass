import "../assets/styles/Rsvp.css";
const Rsvp = () =>{
    return(
<div className='body-rsvp'> 
<div class="mainContainer">
  <div class="cardHolder">
    <div class="header">
      <div class="heading center">RSVP</div>
      {/* <div class="stepHeading center">Payment Method</div> */}
      <div class="card">
        <div class="top part">
          {/* <img src="https://i.imgrpost.com/imgr/2017/12/26/visa-1.png" alt="visa-1.png" border="0" /> */}
        </div>
        <div class="middle part">
          <div class="infoheader vcenter">CARD NUMBER</div>
          <div class="infocontent number vcenter">
            <div class="num center">****</div>
            <div class="num center">****</div>
            <div class="num center">4658</div>
            <div class="num center">****</div>
          </div>
        </div>
        <div class="bottom part">
          <div class="holderInfo">
             <div class="infoheader vcenter">CARD HOLDER</div>
            <div class="infocontent name vcenter">JOHN DOE</div>
          </div>
          <div class="expDate">
            <div class="infoheader vcenter">EXP. DATE</div>
            <div class="infocontent date vcenter">09/2023</div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="status vcenter"> <i class="fa fa-check" aria-hidden="true"></i>
    Option : M-Pesa(mobile money)
  </div>
  
  {/* <h5 class="center">OTHER PAYMENT OPTIONS</h5>
  <div class="options vcenter">
    <div class="opt">
      <div class="icon center">
        <i class="fa fa-money" aria-hidden="true"></i>
      </div>
      <div class="optname center">COD</div>
    </div>
     <div class="opt">
      <div class="icon center">
        <i class="fa fa-btc" aria-hidden="true"></i>
      </div>
      <div class="optname center">BitCoin</div>
    </div>
     <div class="opt">
      <div class="icon center">
        <i class="fa fa-google-wallet" aria-hidden="true"></i>
      </div>
      <div class="optname center">E-Wallet</div>
    </div>
  </div> */}
  <div class="payment vcenter">
    <div class="amount">
      <div class="infoheader vcenter">Total Amount</div>
      <div class="infocontent val vcenter">ksh 1</div>
    </div>
    <div class="button center">checkout</div>
  </div>
</div>

    </div>
    )
   
}
export default Rsvp