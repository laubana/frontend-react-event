import { apiSlice } from "./apiSlice";

type SignUpRequest = {
  email: string;
  password: string;
  imageUrl: string;
  name: string;
  address: string;
  latitude: string;
  longitude: string;
  description: string;
};

type SignInRequest = {
  email: string;
  password: string;
};

type SignInResponse = {
  accessToken: string;
  id: string;
  email: string;
};

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    signUp: builder.mutation<null, SignUpRequest>({
      query: (body) => ({
        url: `/auth/sign-up`,
        method: "POST",
        body,
      }),
    }),
    signIn: builder.mutation<SignInResponse, SignInRequest>({
      query: (body) => ({
        url: `/auth/sign-in`,
        method: "POST",
        body,
      }),
    }),
    refresh: builder.mutation<SignInResponse, void>({
      query: () => ({
        url: `/auth/refresh`,
        method: "GET",
      }),
    }),
    signOut: builder.mutation({
      query: () => ({
        url: `/auth/sign-out`,
        method: "POST",
      }),
    }),
  }),
});

export const { useSignUpMutation, useSignInMutation, useRefreshMutation } =
  authApiSlice;
