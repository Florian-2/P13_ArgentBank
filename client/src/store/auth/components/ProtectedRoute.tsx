import { Navigate } from "react-router-dom";
import { ReactNode } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

export function ProtectedRoute({ children }: { children: ReactNode }) {
	const { user, loaded } = useSelector((state: RootState) => state.auth);

	if (user) {
		return children;
	} else if (!user && loaded) {
		return <Navigate to="/login" />;
	} else {
		return null;
	}
}
