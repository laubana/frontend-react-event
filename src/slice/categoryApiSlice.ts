import { apiSlice } from "./apiSlice";
import { Category } from "../type/Category";

export const categoryApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getCategorys: builder.query<{ message: string; data: Category[] }, void>({
      query: () => ({
        url: `/api/categorys`,
        method: "GET",
      }),
      providesTags: (result) =>
        result?.data
          ? [
              { type: "Category" as const, id: "LIST" },
              ...result.data.map((category) => ({
                type: "Category" as const,
                id: category._id,
              })),
            ]
          : [{ type: "Category" as const, id: "LIST" }],
    }),
  }),
});

export const { useGetCategorysQuery } = categoryApiSlice;
