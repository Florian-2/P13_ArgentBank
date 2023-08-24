import { RootState } from "@/store/store";
import { useSelector } from "react-redux";
import { TransactionsList } from "./components/Transactions";

function Profile() {
	const { user } = useSelector((state: RootState) => state.auth);

	return (
		<>
			<div className="header">
				<h1>
					Welcome back
					<br />
					{user?.firstName} {user?.lastName} !
				</h1>
				<button className="edit-button">Edit Name</button>
			</div>

			<h2 className="sr-only">Accounts</h2>

			<TransactionsList />
		</>
	);
}

export default Profile;
