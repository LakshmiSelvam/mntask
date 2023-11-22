import '../style/PageNotFound.css';
import { useNavigate } from "react-router-dom";
import page_not_found from '../../assets/svg/page_not_found.svg';

function PageNotFound() {
	const navigate = useNavigate();
	return (
		<div className="page-not-found-container">
			<div className="page-not-found-inner-container">
				<div className="page-not-found-text">
					<div className="page-not-found-title">
						<div>404</div>
						<div>Page Not Found</div>
					</div>
					<div className="page-not-found-content">
						A 404 error tells users the page cannot be accessed due to Invalid Page or you do not have permission to access the page. Please contact Administrator
					</div>
					<div className="page-not-found-btn">
						<button onClick={() => navigate("/home/dashboard")}>
							Go Home
						</button>
					</div>
				</div>
				<div className="page-not-found-img">
					<img src={page_not_found} />
				</div>
			</div>
		</div>
	)
}
export default PageNotFound;