import { React, useState} from 'react';
import { NavLink} from 'react-router-dom';
import '../style/SideBar.css';
import { BiMenu } from "react-icons/bi"

import profile from '../../assets/images/profile1.png'
function Nav(props){
	const [toggleMenu, setToggleMenu] = useState(false);
	const {firstName, lastName } = props;
	const toggleNav = () => {
		setToggleMenu(!toggleMenu);
	}
	return(
		<div className={toggleMenu ? "nav-bar-ctr shows" : "nav-bar-ctr hides"} data-testid="navbar-container">
			<div className={toggleMenu ? "side-navbar shows" :"side-navbar hides"}>
				<div className="menu-list" id="menu-list"  onClick={()=>toggleNav()} >
					<BiMenu style={{ color: '#fff', width: '15%', height: '9vh', cursor: 'pointer' }} />
				</div> 
				<div className={toggleMenu?"nav-details show":"nav-details hide"}>    
					<div className="logo-details">
						<img 
							data-testid="logo"
							src={profile} 
							onError={(e) => { e.target.onerror = null;}}
							alt="logo"
						/>
					</div>
					<div className="login-details">
						<p data-testid="user-logged">Logged in as {firstName+" "+lastName} </p>
					</div>
							
					<div className={"nav-links"} id="nav-link-ctr">
					<>
						<div className='sidebar-menu-item' data-testid="side-bar-menu">
							<NavLink className="sidebar-menu-item-link" to=''>
								<span className="title">
									Dashboard
								</span>
							</NavLink>
						</div>
						<div className='sidebar-menu-item' data-testid="side-bar-menu">
							<NavLink className="sidebar-menu-item-link" to=''>
								<span className="title">
									Report
								</span>
							</NavLink>
						</div>
						<div className='sidebar-menu-item' data-testid="side-bar-menu">
							<NavLink className="sidebar-menu-item-link" to=''>
								<span className="title">
									History
								</span>
							</NavLink>
						</div>
					</>
					</div>
				</div>
			</div>
		</div>
	);
}
export default Nav;
