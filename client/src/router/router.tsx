import { createBrowserRouter } from "react-router-dom";
import { ProtectedRoute } from "@/store/auth/components/ProtectedRoute";
import { NotProtectedRoute } from "@/store/auth/components/NotProtectedRoute";
import App from "@/App";
import Home from "@/pages/Home";
import Login from "@/pages/Login";
import Profile from "@/pages/Profile";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{
				index: true,
				element: <Home />,
			},
			{
				path: "/login",
				element: (
					<NotProtectedRoute>
						<Login />
					</NotProtectedRoute>
				),
			},
			{
				path: "/profile",
				element: (
					<ProtectedRoute>
						<Profile />
					</ProtectedRoute>
				),
			},
		],
	},
]);
