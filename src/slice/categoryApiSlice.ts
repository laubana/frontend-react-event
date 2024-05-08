import { Category } from "../type/Category";
import { apiSlice } from "./apiSlice";

export const categoryApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getCategorys: builder.query<Category[], void>({
      query: () => ({
        url: `/api/categorys`,
        method: "GET",
      }),
      providesTags: (result) =>
        result
          ? [
              { type: "Category" as const, id: "LIST" },
              ...result.map((category) => ({
                type: "Category" as const,
                id: category._id,
              })),
            ]
          : [{ type: "Category" as const, id: "LIST" }],
    }),
  }),
});

export const { useGetCategorysQuery } = categoryApiSlice;
