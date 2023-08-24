import Logo from "@/assets/images/argentBankLogo.png";
import { logOut } from "@/store/auth/authSlice";
import { RootState } from "@/store/store";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

export function Header() {
	const { user, isAuthenticated } = useSelector((state: RootState) => state.auth);
	const dispatch = useDispatch();

	function logout() {
		dispatch(logOut());
		// localStorage.removeItem()
	}

	return (
		<nav className="main-nav">
			<Link to="/">
				<img className="main-nav-logo-image" src={Logo} alt="Argent Bank Logo" />
				<h1 className="sr-only">Argent Bank</h1>
			</Link>

			<div>
				{isAuthenticated ? (
					<>
						<Link to="/profile" className="main-nav-item">
							<i className="fa fa-user-circle"></i>
							{user?.firstName}
						</Link>

						<Link to="/" className="main-nav-item" onClick={logout}>
							<i className="fa fa-sign-out"></i>
							Sign Out
						</Link>
					</>
				) : (
					<Link to="/signin" className="main-nav-item">
						<i className="fa fa-sign-out"></i>
						Sign In
					</Link>
				)}
			</div>
		</nav>
	);
}
