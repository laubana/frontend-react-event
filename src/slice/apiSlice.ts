import {
  BaseQueryApi,
  createApi,
  fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";
import { RootState } from "../store/toolkitStore";
import { setAccessToken, signout } from "./authSlice";

const baseQuery = fetchBaseQuery({
  baseUrl: "http://localhost:3500/",
  credentials: "include",
  prepareHeaders: (headers, { getState }) => {
    const state = getState() as RootState;

    const accessToken = state.auth.accessToken;

    if (accessToken) {
      headers.set("Authorization", `Bearer ${accessToken}`);
    }
    return headers;
  },
});

const baseQueryWithRefresh = async (
  args: any,
  api: BaseQueryApi,
  extraOptions: any
): Promise<any> => {
  const response = await baseQuery(args, api, extraOptions);

  if (response.error?.status === 401) {
    console.log("refresh");

    const refreshResponse = await baseQuery("/auth/refresh", api, extraOptions);

    if (refreshResponse && refreshResponse.data) {
      api.dispatch(setAccessToken({ ...refreshResponse.data }));

      const newResponse = await baseQuery(args, api, extraOptions);

      return newResponse;
    } else {
      api.dispatch(signout());

      return refreshResponse;
    }
  }

  return response;
};

export const apiSlice = createApi({
  reducerPath: "backendApi",
  baseQuery: baseQueryWithRefresh,
  endpoints: (builder) => ({}),
  tagTypes: ["Auth"],
});
