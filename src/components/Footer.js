import "../assets/styles/Footer.css";
import fb from '../assets/images/fb.svg';
import twitter from '../assets/images/twitter.svg';
import ig from '../assets/images/ig.svg';
import linkedin from '../assets/images/linkedin.svg';
// import { Link } from "react-router-dom";

const Footer = () =>{
    return (
<div className="bottom">

	<footer className="site-footer">
		<div className = "container">

			<div className="grid-container">
				<div className="grid-item">
					
					{/* <img src = " " className = "logo-img" /> */}

				</div>

				<div className="grid-item inner-grid-container">
					
					<div className="grid-item"><a href=" ">About Us</a></div>   
					<div className="grid-item"><a href=" ">Terms and Conditions</a></div>   
					<div className="grid-item"><a href=" ">Privacy Policy</a></div>   
					<div className="grid-item"><a href=" ">Donate here</a></div>   
					<div className="grid-item"><a href=" ">Contact us</a></div>
					<div className="grid-item"><a href=" ">Cookie Policy</a></div>   
					 


				</div>

				<div className="grid-item">
					<div className = "social-buttons">
						<a href= " "><img className="fab fa-instagram circle-icon" src={ig} alt="ig"></img></a>
						<a href= " "><img className="fab fa-facebook circle-icon" src={fb} alt="fb"></img></a>
						<a href= " "><img className="fab fa-linkedin-in circle-icon" src={linkedin} alt="linkedin"></img></a>
						<a href= " "><img className="fab fa-twitter circle-icon" src={twitter} alt="twitter"></img></a>
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