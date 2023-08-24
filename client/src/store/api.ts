import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "./store";

const baseQuery = fetchBaseQuery({
	baseUrl: "http://localhost:3001/api/v1",
	prepareHeaders: (headers, api) => {
		const state = api.getState() as RootState;
		const token = state.auth.token;

		if (token) {
			headers.set("authorization", `Bearer ${token}`);
		}
		return headers;
	},
});

export const apiSlice = createApi({
	baseQuery: baseQuery,
	endpoints: () => ({}),
});
