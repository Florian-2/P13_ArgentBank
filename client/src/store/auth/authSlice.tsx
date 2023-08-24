import { AuthStore, User } from "@/interfaces";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
	name: "auth",
	initialState: { user: null, token: null, isAuthenticated: false } as AuthStore,
	reducers: {
		setCredentials: (state, action: PayloadAction<{ user: User }>) => {
			const { user } = action.payload;
			state.user = user;
			state.isAuthenticated = true;
		},
		setToken: (state, action: PayloadAction<{ token: string }>) => {
			state.token = action.payload.token;
		},
		setName: (state, action: PayloadAction<{ firstName: string; lastName: string }>) => {
			const firstName = action.payload.firstName;
			const lastName = action.payload.lastName;

			if (state.user) {
				state.user.firstName = firstName;
				state.user.lastName = lastName;
			}
		},
		logOut: (state) => {
			state.user = null;
			state.token = null;
			state.isAuthenticated = false;
		},
	},
});

export const { setCredentials, setToken, setName, logOut } = authSlice.actions;

export const authReducer = authSlice.reducer;
