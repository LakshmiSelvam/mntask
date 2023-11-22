import React, { useState, useEffect } from "react";
import InputField from "../../common/component/InputField";
import ButtonField from "../../common/component/ButtonField";
import validator from "validator";
import "../Style/login.css";
import {  useNavigate } from "react-router-dom";

function SignInPage(props) {
	const navigate = useNavigate();
	var [loginForm, setLoginForm] = useState({
		email:localStorage.getItem('emailId')?localStorage.getItem('emailId'): "",
		password: localStorage.getItem('password')?localStorage.getItem('password'):"",
	});
	var [ErrorMessage, setErrorMessage] = useState("");
	var [ErrorEmail, setErrorEmail] = useState(false);
	var [ErrorPassword, setErrorPassword] = useState(false);
	var [showPassword, setShowPassword] = useState(false);
	
	useEffect(()=>{
		if (localStorage.email !== undefined) {
			navigate("/home/dashboard")
		}
	},[])

	const loginFormOnchangeHandler = (event) => {
		event.preventDefault();
		const { name, value } = event.target;
		const updatedForm = {
			...loginForm,
			[name]: value,
		};
		setLoginForm(updatedForm);
	};
	const loginFormButtonHandler = async(event) => {
		event.preventDefault();
		if(loginForm.email.length <= 0){
			setErrorMessage("Please enter a Email")
			return setErrorEmail(true)
		}
		if (validator.isEmail(loginForm.email) === false) {
			setErrorMessage("Enter a valid Email");
			return setErrorEmail(true);
		}
		if (loginForm.password.length === 0) {
			setErrorMessage("Please enter a password");
			return setErrorPassword(true);
		}
		if (ErrorEmail === false && ErrorPassword === false ) {
			if(loginForm.email == 'lakshmiselvamcse@gmail.com' && loginForm.password == 'abc'){
			localStorage.setItem("firstName","Lakshmi");
			localStorage.setItem("lastName","Selvam");
			localStorage.setItem("emailId",loginForm.email);
			navigate("/home/dashboard");
			}
			else{
				setErrorMessage("Email Id and Password is mismatched");
				return setErrorPassword(true);
			}
		} 
	};
	return (
		<React.Fragment>
			<div className="login-section" data-testid="login-section">  
				<form onSubmit={loginFormButtonHandler} className="login-conatiner">
					<h1 data-testid="login-form-title">Sign in</h1>
					<InputField
						label="Email"
						type="email"
						autoFocus={true}
						name="email"
						value={loginForm.email}
						dataTestid="email-field"
						onChange={(event) => {
							setErrorEmail(false);
							setErrorPassword(false);
							setErrorMessage(' ')
							loginFormOnchangeHandler(event);
						}}
					/>
					<span data-testid="email-error-field">
						{ErrorEmail && ErrorMessage}
					</span>
					<InputField
						label="Password"
						type={showPassword ? "text" : "password"}
						name="password"
						dataTestid="password-field"
						value={loginForm.password}
						onChange={(event) => {
							setErrorPassword(false);
							setErrorMessage(' ')
							loginFormOnchangeHandler(event);
						}}
					/>
				   
					<span data-testid="password-error-field">
						{ErrorPassword  && ErrorMessage}
					</span>
				
					<div className="show-password">
						<input type="checkbox"  
							checked = {showPassword} 
							data-testid="show-password-checkbox"
							onChange={()=>{
								setShowPassword(!showPassword)
							}}
						/>
						<p  className="show-password-text" 
							onClick={()=>{
								setShowPassword(!showPassword)
							}}
							data-testid="show-password-checkbox-text"
						>
							Show Password
						</p> 
					</div>
					
					<ButtonField
						onClick={loginFormButtonHandler}
						label={"SIGN IN"}
					/>
					</form>
				</div>
			
			
		</React.Fragment>
	);
}

export default SignInPage;
