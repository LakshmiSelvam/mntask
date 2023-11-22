import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { BsThreeDotsVertical } from "react-icons/bs";
import "../style/Header.css"

function Header(props) {
	const navigate = useNavigate()
	const ref = useRef()
	const userPermissions = useSelector(state => state.userReducer.userPermissions)
	const loginDetails = useSelector(state => state.userReducer.adminDetail)
	const [ButtonPopUp, setButtonPopUp] = useState(false)
	useEffect(() => {
		const checkIfClickedOutside = e => {
			if (ButtonPopUp && ref.current && !ref.current.contains(e.target)) {
				setButtonPopUp(false)
			}
		}
		document.addEventListener("mousedown", checkIfClickedOutside)
		return () => {
			document.removeEventListener("mousedown", checkIfClickedOutside)
		}
	}, [ButtonPopUp])

	const SignOutButtonHandler = (event) => {
		event.preventDefault();
		if (localStorage.getItem("rememberMe") == 'true') {
			localStorage.removeItem("loginUserId");
			localStorage.removeItem("firstName")
			localStorage.removeItem("lastName")
			localStorage.removeItem("accessToken")
			localStorage.removeItem("refreshToken")
			localStorage.removeItem("profilePicture")
			localStorage.removeItem("functionalRoleId")
			localStorage.removeItem("siteLogo")
			localStorage.removeItem("siteName")
			localStorage.removeItem("facilityId")
		}
		else {
			localStorage.clear()
		}
		navigate("/user/login"); 
		// window.location.href = "/user/login";
	};
	const logoHandler = (event) => {
		window.open("https://www.statussolutions.com/", "_blank")
	};
	return (
		<div className="header-container" ref={ref} data-testid="header-container">
			<div className="header-title" data-testid="header-element">
				<h2>Admin</h2>
			</div>
			{!props.landing && (
				<div
					className="header-profile-container"
					data-testid="header-profile-container-testid"
					onClick={() => { setButtonPopUp(!ButtonPopUp) }}
				>
					<p data-testid="username" onClick={SignOutButtonHandler}>
						Sign Out
					</p>
					<BsThreeDotsVertical className="profile-viewer-btn" />
					{ButtonPopUp && <div className="header-pop-up-ctr" data-testid="sign-out-popup">
						<div className="signout-header-ctr" data-testid="header-sign-out-btn" onClick={SignOutButtonHandler}>Sign Out</div>
					</div>}
				</div>
			)}
		</div>
	);
}

export default Header;