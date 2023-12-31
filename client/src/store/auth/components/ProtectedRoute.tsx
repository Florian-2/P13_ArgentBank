import { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "@/store";

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
