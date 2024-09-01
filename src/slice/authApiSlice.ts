import { apiSlice } from "./apiSlice";

type SignUpReq = {
  email: string;
  password: string;
  imageUrl: string;
  name: string;
  address: string;
  latitude: number;
  longitude: number;
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
    refresh: builder.mutation<{ message: string; data: SignInRes }, void>({
      query: () => ({
        url: `/auth/refresh`,
        method: "GET",
      }),
    }),
    signIn: builder.mutation<{ message: string; data: SignInRes }, SignInReq>({
      query: (body) => ({
        url: `/auth/sign-in`,
        method: "POST",
        body,
      }),
    }),
    signOut: builder.mutation<{ message: string }, void>({
      query: () => ({
        url: `/auth/sign-out`,
        method: "POST",
      }),
    }),
    signUp: builder.mutation<void, SignUpReq>({
      query: (body) => ({
        url: `/auth/sign-up`,
        method: "POST",
        body,
      }),
    }),
  }),
});

export const {
  useRefreshMutation,
  useSignInMutation,
  useSignOutMutation,
  useSignUpMutation,
} = authApiSlice;
