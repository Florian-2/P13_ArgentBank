import { useState, FormEvent } from "react";
import { useDispatch } from "react-redux";
import { useEditProfileMutation } from "@/store/user/userApi";
import { setProfile } from "@/store/auth/authSlice";
import { isErrorWithMessage } from "@/utils";
import { Input } from "@/components/Input";
import { Button } from "@/components/Button";
import styles from "./editName.module.css";

export function EditName({ toggleEditMode }: { toggleEditMode: () => void }) {
	const [errorMessage, setErrorMessage] = useState<string>();

	const dispatch = useDispatch();
	const [editProfile, { isLoading }] = useEditProfileMutation();

	async function handleSubmit(e: FormEvent) {
		e.preventDefault();

		const formData = new FormData(e.target as HTMLFormElement);
		const firstName = formData.get("firstname")?.toString();
		const lastName = formData.get("lastname")?.toString();

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
		<form
			onSubmit={handleSubmit}
			className={styles.editForm}
		>
			<div className="edit-inputs">
				<Input
					type="text"
					name="firstname"
					placeholder="John"
					autoFocus
				/>
				<Input
					type="text"
					name="lastname"
					placeholder="Doe"
				/>
			</div>

			<div className={styles.actions}>
				<Button
					type="submit"
					disabled={isLoading}
				>
					Save
				</Button>

				<Button
					type="button"
					onClick={toggleEditMode}
					disabled={isLoading}
				>
					Cancel
				</Button>
			</div>

			{errorMessage && <span className="error">{errorMessage}</span>}
		</form>
	);
}
