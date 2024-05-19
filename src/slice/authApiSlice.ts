import { apiSlice } from "./apiSlice";

type SignUpReq = {
  email: string;
  password: string;
  imageUrl: string;
  name: string;
  address: string;
  latitude: string;
  longitude: string;
  description: string;
};

type SignInReq = {
  email: string;
  password: string;
};

type SignInRes = {
  accessToken: string;
  id: string;
  email: string;
};

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    signUp: builder.mutation<void, SignUpReq>({
      query: (body) => ({
        url: `/auth/sign-up`,
        method: "POST",
        body,
      }),
    }),
    signIn: builder.mutation<{ message: string; data: SignInRes }, SignInReq>({
      query: (body) => ({
        url: `/auth/sign-in`,
        method: "POST",
        body,
      }),
    }),
    refresh: builder.mutation<{ message: string; data: SignInRes }, void>({
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
