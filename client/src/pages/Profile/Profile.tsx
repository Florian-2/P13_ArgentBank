import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { TransactionsList } from "./components/Transactions";
import { EditName } from "./components/EditName";
import { updatedAt } from "@/utils";

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
					<button
						className="edit-button"
						onClick={toggleEditMode}
						title={user?.updatedAt && updatedAt(user.updatedAt)}
					>
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
