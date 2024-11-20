import {
  BaseQueryApi,
  createApi,
  fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";

import { setAuth } from "./authSlice";

import { RootState } from "../store/store";

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
  const oldResponse = await baseQuery(args, api, extraOptions);

  if (oldResponse.error?.status === 401) {
    const refreshResponse = await baseQuery("/auth/refresh", api, extraOptions);

    if (refreshResponse && refreshResponse.data) {
      const refreshData = refreshResponse.data as {
        message: string;
        data: {
          accessToken: string;
          id: string;
          email: string;
        };
      };

      api.dispatch(setAuth({ ...refreshData.data }));

      const newResponse = await baseQuery(args, api, extraOptions);

      return newResponse;
    } else {
      api.dispatch(setAuth({ accessToken: "", email: "", id: "" }));

      return oldResponse;
    }
  }

  return oldResponse;
};

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: baseQueryWithRefresh,
  endpoints: () => ({}),
  tagTypes: [
    "Auth",
    "Category",
    "Event",
    "EventComment",
    "EventImage",
    "EventRegistration",
    "GroupComment",
    "GroupImage",
    "GroupRegistration",
    "Group",
    "Payment",
    "PaymentMethod",
    "Transaction",
    "User",
  ],
});
