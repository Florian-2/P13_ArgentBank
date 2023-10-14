import { FormEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useLoginMutation, useGetProfileMutation } from "@/store/auth/authApi";
import { setCredentials, setToken } from "@/store/auth/authSlice";
import { isErrorWithMessage } from "@/utils";
import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { FormGroup } from "@/components/FormGroup";
import styles from "./login.module.css";

function Login() {
	const [errorMessage, setErrorMessage] = useState<string>("");

	const dispatch = useDispatch();
	const [login, { isLoading: loginIsLoading }] = useLoginMutation();
	const [getProfile, { isLoading: getProfileIsLoading }] = useGetProfileMutation();

	const navigate = useNavigate();

	async function handleSubmit(e: FormEvent) {
		e.preventDefault();

		const formData = new FormData(e.currentTarget as HTMLFormElement);

		const email = String(formData.get("email"));
		const password = String(formData.get("password"));

		try {
			const token = await login({ email, password }).unwrap();
			dispatch(setToken({ token }));

			const user = await getProfile("").unwrap();
			dispatch(setCredentials({ user }));

			navigate("/profile");
		} catch (e) {
			if (isErrorWithMessage(e)) {
				setErrorMessage(e.message);
			}
		}
	}

	return (
		<section className={styles.sectionForm}>
			<div className={styles.formContainer}>
				<i className="fa fa-user-circle sign-in-icon"></i>

				<h1>Sign In</h1>

				<form onSubmit={handleSubmit}>
					<FormGroup>
						<label htmlFor="email">Email</label>
						<Input
							type="text"
							placeholder="tony@stark.com"
							id="email"
							name="email"
						/>
					</FormGroup>

					<FormGroup>
						<label htmlFor="password">Password</label>

						<Input
							type="password"
							placeholder="Mot de passe"
							name="password"
						/>
					</FormGroup>

					<FormGroup className={styles.formRememberMe}>
						<Input
							type="checkbox"
							id="remember-me"
						/>

						<label htmlFor="remember-me">Remember me</label>
					</FormGroup>

					{errorMessage && <span className="error">{errorMessage}</span>}

					<Button disabled={loginIsLoading || getProfileIsLoading}>
						{loginIsLoading || getProfileIsLoading ? "Loading..." : "Sign In"}
					</Button>
				</form>
			</div>
		</section>
	);
}

export default Login;
