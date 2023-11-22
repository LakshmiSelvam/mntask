import React from "react";
import "../style/Footer.css";
import EmailSvg from "../assets/svg/EmailSvg.svg";
import LandLinePhoneSvg from "../assets/svg/LandlinePhone.svg";
import WebsiteIcon from "../assets/svg/websiteIcon.svg";


function Footer() {
	return (
		<div className="footer-container" data-testid="footer-container">
			<div
				className="conatct-container"
				data-testid="contact-container-testid"
			>
				<div
				className="row-2 copy-right-container"
				data-testid="copyright-conatiner"
			>
				
				<div className="logo-container">
					<h4 data-testid="brand-content">
					5th floor, <br />BNT Connections, <br />126, Nelson Manickam Rd<br />
					Railway Colony, Aminjikarai <br />Chennai, Tamil Nadu 600029.
					</h4>
				</div>
			</div>
				<div className="row-3">
					<a href="https://mnengineeringsolutions.com/" target="_blank" rel="noreferrer">
						<li>
							<img src={WebsiteIcon} alt="Location Icon" data-testid="website-icon"/>
							<span data-testid="website-content">www.testadmin.com</span>
						</li>
					</a>
					<a href="mailto:email@testadmin.com">
						<li>
							<img src={EmailSvg} alt="Email icon" data-testid="email-icon"/>
							<span data-testid="email-content">email@testadmin.com</span>
						</li>
					</a>
					<a href="#">
						<li>
							<img src={LandLinePhoneSvg} alt="Location Icon" data-testid="phone-icon"/>
							<span data-testid="phone-content">864.846.7262</span>
						</li>
					</a>
				</div>
			</div>
			<div className="network-directory-ctr">
			<a href="https://mnengineeringsolutions.com/"  target="_blank" >
				<img src='https://mnengineeringsolutions.com/wp-content/uploads/2022/09/logo.png'/>
			</a>
			</div>
		</div>
	);
}

export default Footer;
