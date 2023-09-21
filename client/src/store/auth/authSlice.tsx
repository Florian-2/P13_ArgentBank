import { AuthStore, User } from "@/interfaces";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
	name: "auth",
	initialState: { user: null, token: null, loaded: false } as AuthStore,
	reducers: {
		setCredentials: (state, action: PayloadAction<{ user: User }>) => {
			const { user } = action.payload;
			state.user = user;
		},
		setToken: (state, action: PayloadAction<{ token: string }>) => {
			const { token } = action.payload;
			state.token = token;
			localStorage.setItem("auth", JSON.stringify({ token }));
		},
		setProfile: (state, action: PayloadAction<User>) => {
			state.user = action.payload;
		},
		setLoaded: (state, action: PayloadAction<boolean>) => {
			state.loaded = action.payload;
		},
		logOut: (state) => {
			state.user = null;
			state.token = null;
			localStorage.removeItem("auth");
		},
	},
});

export const { setCredentials, setToken, setProfile, setLoaded, logOut } = authSlice.actions;

export const authReducer = authSlice.reducer;
