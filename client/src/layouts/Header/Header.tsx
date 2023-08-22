import Logo from "@/assets/images/argentBankLogo.png";
import { Link } from "react-router-dom";

export function Header() {
	return (
		<nav className="main-nav">
			<Link to="/">
				<img className="main-nav-logo-image" src={Logo} alt="Argent Bank Logo" />
				<h1 className="sr-only">Argent Bank</h1>
			</Link>
			<div>
				{/* Afficher/Masquer les liens selon l'état du store */}
				<Link to="/profile" className="main-nav-item">
					<i className="fa fa-user-circle"></i>
					Tony
				</Link>

				<Link to="/login" className="main-nav-item">
					<i className="fa fa-sign-out"></i>
					Connexion
				</Link>
			</div>
		</nav>
	);
}
