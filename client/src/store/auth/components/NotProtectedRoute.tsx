import { Navigate } from "react-router-dom";
import { ReactNode } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/store";

export function NotProtectedRoute({ children }: { children: ReactNode }) {
	const { user, loaded } = useSelector((state: RootState) => state.auth);

	if (!user && loaded) {
		return children;
	} else {
		return <Navigate to="/profile" />;
	}
}
