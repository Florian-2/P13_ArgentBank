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
			query: (arg?: any) => ({
				url: "/user/profile",
				method: "POST",
			}),
			transformResponse: ({ body }) => body,
		}),
		editProfile: builder.mutation<{ id: string; email: string }, { firstName: string; lastName: string }>({
			query: (credentials) => ({
				url: "/user/profile",
				method: "PUT",
				body: credentials,
			}),
		}),
	}),
});

export const { useLoginMutation, useGetProfileMutation, useEditProfileMutation } = authApiSlice;
