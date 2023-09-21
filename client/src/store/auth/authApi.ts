import { User } from "@/interfaces";
import { apiSlice } from "../api";

export const authApiSlice = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		login: builder.mutation<string, { email: string; password: string }>({
			query: (credentials) => ({
				url: "/user/login",
				method: "POST",
				body: credentials,
			}),
			transformResponse: ({ body }) => body.token,
			transformErrorResponse: (err) => err.data,
		}),
		getProfile: builder.mutation<User, unknown>({
			// eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any
			query: (_arg?: any) => ({
				url: "/user/profile",
				method: "POST",
			}),
			transformResponse: ({ body }) => body,
		}),
	}),
});

export const { useLoginMutation, useGetProfileMutation } = authApiSlice;
