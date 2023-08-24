import { FormEvent, useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useLoginMutation, useProfileMutation } from "@/store/auth/authApi";
import { setCredentials, setToken } from "@/store/auth/authSlice";
import { isErrorWithMessage } from "@/utils/error";

function Login() {
	const emailRef = useRef<HTMLInputElement | null>(null);
	const passwordRef = useRef<HTMLInputElement | null>(null);
	const [errorMessage, setErrorMessage] = useState("");

	const dispatch = useDispatch();
	const [login, { isLoading: loginIsLoading }] = useLoginMutation();
	const [getProfile, { isLoading: getProfileIsLoading }] = useProfileMutation();

	const navigate = useNavigate();

	useEffect(() => emailRef.current?.focus(), []);

	async function handleSubmit(e: FormEvent) {
		e.preventDefault();
		if (!emailRef.current || !passwordRef.current) return;

		const email = emailRef.current.value || "tony@stark.com";
		const password = passwordRef.current.value || "password123";

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
						<label htmlFor="username">Username</label>
						<input ref={emailRef} type="text" id="username" />
					</div>
					<div className="input-wrapper">
						<label htmlFor="password">Password</label>
						<input ref={passwordRef} type="password" id="password" />
					</div>
					<div className="input-remember">
						<input type="checkbox" id="remember-me" />
						<label htmlFor="remember-me">Remember me</label>
					</div>

					<span className="error">{errorMessage ? errorMessage : ""}</span>

					<button className="sign-in-button" disabled={loginIsLoading || getProfileIsLoading}>
						{loginIsLoading || getProfileIsLoading ? "Loading..." : "Sign In"}
					</button>
				</form>
			</div>
		</section>
	);
}

export default Login;
