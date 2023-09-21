import { User } from "@/interfaces";
import { apiSlice } from "../api";

export const userApiSlice = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		editProfile: builder.mutation<User, { firstName: string; lastName: string }>({
			query: (credentials) => ({
				url: "/user/profile",
				method: "PUT",
				body: credentials,
			}),
			transformResponse: ({ body }) => body,
		}),
	}),
});

export const { useEditProfileMutation } = userApiSlice;
