import { apiSlice } from "./apiSlice";

import { GroupImage } from "../type/GroupImage";

export const groupImageApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    addGroupImage: builder.mutation<
      { message: string; data: GroupImage },
      { groupId: string; imageUrl: string }
    >({
      query: (body) => ({
        url: `/api/group-image`,
        method: "POST",
        body,
      }),
      invalidatesTags: (result, error, args) => [
        { type: "GroupImage" as const, id: "LIST" },
      ],
    }),
    deleteGroupImage: builder.mutation<
      { message: string },
      { groupImageId: string }
    >({
      query: (body) => ({
        url: `/api/group-image/${body.groupImageId}`,
        method: "DELETE",
      }),
      invalidatesTags: (result, error, args) => [
        { type: "GroupImage" as const, id: "LIST" },
      ],
    }),
    getGroupImages: builder.query<
      { message: string; data: GroupImage[] },
      string | undefined
    >({
      query: (groupId) => {
        return {
          url: `/api/group-images/${groupId}`,
          method: "GET",
        };
      },
      providesTags: (result, error, args) =>
        result?.data
          ? [
              { type: "GroupImage" as const, id: "LIST" },
              ...result.data.map((groupImage) => ({
                type: "GroupImage" as const,
                id: groupImage._id,
              })),
            ]
          : [{ type: "GroupImage" as const, id: "LIST" }],
    }),
  }),
});

export const {
  useAddGroupImageMutation,
  useDeleteGroupImageMutation,
  useGetGroupImagesQuery,
} = groupImageApiSlice;
