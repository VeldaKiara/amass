import "../assets/styles/Footer.css";
import fb from '../assets/images/fb.svg';
import twitter from '../assets/images/twitter.svg';
import ig from '../assets/images/ig.svg';
import linkedin from '../assets/images/linkedin.svg';


const Footer = () =>{
    return (
<div className="bottom">

	<footer class="site-footer">
		<div class = "container">

			<div class="grid-container">
				<div class="grid-item">
					
					{/* <img src = " " class = "logo-img" /> */}

				</div>

				<div class="grid-item inner-grid-container">
					
					<div class="grid-item"><a href=" ">About Us</a></div>   
					<div class="grid-item"><a href=" ">Terms and Conditions</a></div>   
					<div class="grid-item"><a href=" ">Privacy Policy</a></div>   
					<div class="grid-item"><a href=" ">Donate here</a></div>   
					<div class="grid-item"><a href=" ">Contact us</a></div>
					<div class="grid-item"><a href=" ">Cookie Policy</a></div>   
					 


				</div>

				<div class="grid-item">
					<div class = "social-buttons">
						<a href= " "><img class="fab fa-instagram circle-icon" src={ig} alt="ig"></img></a>
						<a href= " "><img class="fab fa-facebook circle-icon" src={fb} alt="fb"></img></a>
						<a href= " "><img class="fab fa-linkedin-in circle-icon" src={linkedin} alt="linkedin"></img></a>
						<a href= " "><img class="fab fa-twitter circle-icon" src={twitter} alt="twitter"></img></a>
					</div>
				</div>   
			</div>
			<hr/>

			<p>Copyright © Amass 2021 | All rights reserved</p>

		</div>
	</footer>
</div>
    )
};
 export default Footer;