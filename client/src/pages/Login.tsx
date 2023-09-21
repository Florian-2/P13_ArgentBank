import { FormEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useLoginMutation, useGetProfileMutation } from "@/store/auth/authApi";
import { setCredentials, setToken } from "@/store/auth/authSlice";
import { isErrorWithMessage } from "@/utils";

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
		<section className="sign-in-content">
			<div className="form-container">
				<i className="fa fa-user-circle sign-in-icon"></i>
				<h1>Sign In</h1>
				<form onSubmit={handleSubmit}>
					<div className="input-wrapper">
						<label htmlFor="email">Email</label>
						<input type="text" id="email" name="email" />
					</div>
					<div className="input-wrapper">
						<label htmlFor="password">Password</label>
						<input type="password" id="password" name="password" />
					</div>
					<div className="input-remember">
						<input type="checkbox" id="remember-me" />
						<label htmlFor="remember-me">Remember me</label>
					</div>

					{errorMessage && <span className="error">{errorMessage}</span>}

					<button className="sign-in-button" disabled={loginIsLoading || getProfileIsLoading}>
						{loginIsLoading || getProfileIsLoading ? "Loading..." : "Sign In"}
					</button>
				</form>
			</div>
		</section>
	);
}

export default Login;
