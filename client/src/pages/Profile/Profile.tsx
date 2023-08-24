import { RootState } from "@/store/store";
import { useSelector } from "react-redux";
import { TransactionsList } from "./components/Transactions";
import { useState } from "react";
import { EditName } from "./components/EditName";

function Profile() {
	const { user } = useSelector((state: RootState) => state.auth);
	const [editModeActive, setEditModeActive] = useState(false);

	const toggleEditMode = () => setEditModeActive(!editModeActive);

	return (
		<>
			<div className="header">
				<h1>
					Welcome back
					<br />
					{user?.firstName} {user?.lastName} !
				</h1>

				{editModeActive ? (
					<EditName toggleEditMode={toggleEditMode} />
				) : (
					<button className="edit-button" onClick={toggleEditMode}>
						Edit Name
					</button>
				)}
			</div>

			<h2 className="sr-only">Accounts</h2>

			<TransactionsList />
		</>
	);
}

export default Profile;
