import { useGetProfileMutation } from "@/store/auth/authApi";
import { setToken, setCredentials, setLoaded } from "@/store/auth/authSlice";
import { RootState } from "@/store";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

type LocalStorage = {
	token: string;
};

export function usePersistAuth() {
	const user = useSelector((state: RootState) => state.auth);
	const [getProfile] = useGetProfileMutation();
	const dispatch = useDispatch();

	useEffect(() => {
		async function persistAuth() {
			if (user.loaded && user.user) return;

			try {
				const localStr = localStorage.getItem("auth") || "";
				const { token }: LocalStorage = JSON.parse(localStr);
				if (!token) {
					return dispatch(setLoaded(true));
				}

				dispatch(setToken({ token }));

				const user = await getProfile("").unwrap();
				dispatch(setCredentials({ user }));
			} catch (error) {
				dispatch(setLoaded(true));
			}
		}

		persistAuth();
	}, []);
}
