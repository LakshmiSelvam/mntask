import React from "react";
import Header from "../common/component/Header";
import Footer from "../common/component/Footer";
import Nav from "./Component/Nav";
import Dashboard from './Component/Dashboard.js'
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
function HomeLayout() {
	const navigate = useNavigate();
	useEffect(() => {   
		processLogin();
	}, []);
	function processLogin() {
		if(localStorage.getItem("emailId") == null &&
			localStorage.getItem("firstName") == null && 
			localStorage.getItem("lastName") == null 
		){
			navigate("/user/login");
		}
		}
	return (
		<React.Fragment>
			<div className="container">
				<div className="content-container">
					<div className="inner-content-container">
						<Header />
						<div className="nav-container">
							<Nav />
						</div>
						<div className="right-container">
							<Dashboard />
						</div> 
					</div>
				</div>
				<Footer />
			</div>
		</React.Fragment>
	);
}

export default HomeLayout;
