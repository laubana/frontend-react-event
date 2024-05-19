import { apiSlice } from "./apiSlice";
import { Thread } from "../type/Thread";

export const threadApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getThread: builder.mutation<{ message: string }, string>({
      query: (threadId) => {
        return {
          url: `/api/thread`,
          method: "GET",
          params: { threadId },
        };
      },
    }),
    addThread: builder.mutation<{ message: string; data: Thread }, void>({
      query: () => ({
        url: `/api/thread`,
        method: "POST",
      }),
    }),
  }),
});

export const { useGetThreadMutation, useAddThreadMutation } = threadApiSlice;
