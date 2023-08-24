import { Navigate } from "react-router-dom";
import { ReactNode } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

export function ProtectedRoute({ children }: { children: ReactNode }) {
	const user = useSelector((state: RootState) => state.auth);

	return user.isAuthenticated ? children : <Navigate to="/signin" />;
}
