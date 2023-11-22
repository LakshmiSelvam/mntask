import Navbar from "../../common/component/Navbar" 

export default function Nav() {
	const firstName = localStorage.getItem("firstName");
	const lastName = localStorage.getItem("lastName");

	return (
		<>
			<Navbar
				// logo={parseInt(localStorage.getItem("functionalRoleId")) <= 2 ? SSlogo : localStorage.getItem("siteLogo") }
				firstName={firstName}
				lastName={lastName}
				// logged_school={localStorage.getItem("siteName") || ""}
				data-testid="nav-id"
			/>
		</>
	)
}
