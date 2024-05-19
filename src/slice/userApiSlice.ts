import { apiSlice } from "./apiSlice";
import { User } from "../type/User";

export const userApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getUser: builder.query<{ message: string; data: User }, string | undefined>(
      {
        query: (userId) => {
          return {
            url: `/api/user`,
            method: "GET",
            params: { userId },
          };
        },
        providesTags: (result) =>
          result
            ? [{ type: "User" as const, id: result.data._id }]
            : [{ type: "User" as const }],
      }
    ),
  }),
});

export const { useGetUserQuery } = userApiSlice;
