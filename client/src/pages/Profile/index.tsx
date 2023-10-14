import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import { TransactionsList } from "./components/Transactions/TransactionsList";
import { EditName } from "./components/EditName";
import { updatedAt } from "@/utils";
import { Button } from "@/components/Button";
import { Welcome } from "./components/Welcome";
import styles from "./profile.module.css";

function Profile() {
	const { user } = useSelector((state: RootState) => state.auth);
	const [editModeActive, setEditModeActive] = useState(false);

	const toggleEditMode = () => setEditModeActive(!editModeActive);

	return (
		<>
			<div className={styles.header}>
				<Welcome
					firstName={user!.firstName}
					lastName={user!.lastName}
				/>

				{editModeActive ? (
					<EditName toggleEditMode={toggleEditMode} />
				) : (
					<Button
						onClick={toggleEditMode}
						title={user?.updatedAt && updatedAt(user.updatedAt)}
					>
						Edit Name
					</Button>
				)}
			</div>

			<TransactionsList />
		</>
	);
}

export default Profile;
