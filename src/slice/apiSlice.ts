import {
  BaseQueryApi,
  createApi,
  fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";
import { RootState } from "../store/store";
import { setAuth, signOut } from "./authSlice";

const baseQuery = fetchBaseQuery({
  baseUrl: process.env.REACT_APP_BACKEND_URL,
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
    const refreshResponse = await baseQuery("/auth/refresh", api, extraOptions);

    if (refreshResponse && refreshResponse.data) {
      api.dispatch(setAuth({ ...refreshResponse.data }));

      const newResponse = await baseQuery(args, api, extraOptions);

      return newResponse;
    } else {
      api.dispatch(signOut());

      return refreshResponse;
    }
  }

  return response;
};

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: baseQueryWithRefresh,
  endpoints: (builder) => ({}),
  tagTypes: ["Auth", "Category", "Comment", "Group", "Registration"],
});
