import { apiSlice } from "./apiSlice";

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    signUp: builder.mutation({
      query: ({ email, password }) => ({
        url: "/auth/sign-up",
        method: "POST",
        body: { email, password },
      }),
    }),
    signIn: builder.mutation({
      query: ({ email, password }) => ({
        url: "/auth/sign-in",
        method: "POST",
        body: { email, password },
      }),
    }),
    refresh: builder.mutation({
      query: () => ({
        url: "/auth/refresh",
        method: "GET",
      }),
    }),
    signOut: builder.mutation({
      query: () => ({
        url: "/auth/sign-out",
        method: "POST",
      }),
    }),
  }),
});

export const { useSignUpMutation, useSignInMutation } = authApiSlice;
