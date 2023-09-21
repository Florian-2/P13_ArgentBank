import { useEffect, useRef, useState, FormEvent } from "react";
import { useDispatch } from "react-redux";
import { useEditProfileMutation } from "@/store/user/userApi";
import { setProfile } from "@/store/auth/authSlice";
import { isErrorWithMessage } from "@/utils";

export function EditName({ toggleEditMode }: { toggleEditMode: () => void }) {
	const firstnameRef = useRef<HTMLInputElement | null>(null);
	const lastnameRef = useRef<HTMLInputElement | null>(null);
	const [errorMessage, setErrorMessage] = useState<string>();

	const dispatch = useDispatch();
	const [editProfile, { isLoading }] = useEditProfileMutation();

	useEffect(() => firstnameRef.current?.focus(), []);

	async function handleSubmit(e: FormEvent) {
		e.preventDefault();
		if (!firstnameRef.current || !lastnameRef.current) return;

		const firstName = firstnameRef.current.value;
		const lastName = lastnameRef.current.value;

		if (!firstName || !lastName) {
			return setErrorMessage("please complete the form");
		}

		try {
			const user = await editProfile({ firstName, lastName }).unwrap();
			dispatch(setProfile(user));

			toggleEditMode();
		} catch (error) {
			if (isErrorWithMessage(e)) {
				setErrorMessage(e.message);
			}
		}
	}

	return (
		<>
			<form onSubmit={handleSubmit} className="edit-form">
				<div className="edit-inputs">
					<input ref={firstnameRef} type="text" placeholder="John" />
					<input ref={lastnameRef} type="text" placeholder="Doe" />
				</div>

				<div className="edit-action">
					<button type="submit" className="edit-button" disabled={isLoading}>
						Save
					</button>
					<button type="button" onClick={toggleEditMode} disabled={isLoading} className="edit-button">
						Cancel
					</button>
				</div>
			</form>

			{errorMessage && <span className="error">{errorMessage}</span>}
		</>
	);
}
