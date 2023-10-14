import { logOut } from "@/store/auth/authSlice";
import { RootState } from "@/store";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Logo from "@/assets/images/argentBankLogo.png";
import IconUser from "@/assets/user.svg";
import IconConnexion from "@/assets/signout.svg";
import styles from "./Header.module.css";

export function Header() {
	const { user } = useSelector((state: RootState) => state.auth);
	const dispatch = useDispatch();

	return (
		<header className={styles.header}>
			<Link to="/">
				<img
					className={styles.logo}
					src={Logo}
					alt="Argent Bank Logo"
				/>
			</Link>

			<nav className={styles.navigation}>
				{user ? (
					<>
						<Link
							to="/profile"
							className={styles.link}
						>
							<span className={`${styles.iconBox} ${styles.iconUserBox}`}>
								<img
									className={styles.icon}
									src={IconUser}
									alt="icon user profile"
								/>
							</span>
							{user?.firstName}
						</Link>

						<Link
							to="/"
							className={styles.link}
							onClick={() => dispatch(logOut())}
						>
							<span className={styles.iconBox}>
								<img
									className={styles.icon}
									src={IconConnexion}
									alt="icon sign-out"
								/>
							</span>
							Sign Out
						</Link>
					</>
				) : (
					<Link
						to="/login"
						className={styles.link}
					>
						<span className={styles.iconBox}>
							<img
								className={styles.icon}
								src={IconConnexion}
								alt="icon sign-in"
							/>
						</span>
						Sign In
					</Link>
				)}
			</nav>
		</header>
	);
}
