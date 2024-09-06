import { apiSlice } from "./apiSlice";

import { GroupComment } from "../type/GroupComment";

export const groupCommentApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    addGroupComment: builder.mutation<
      { message: string; data: GroupComment },
      { groupId: string; value: string }
    >({
      query: (body) => ({
        url: `/api/group-comment`,
        method: "POST",
        body,
      }),
      invalidatesTags: (result, error, args) => [
        { type: "GroupComment" as const, id: "LIST" },
      ],
    }),
    deleteGroupComment: builder.mutation<
      { message: string },
      { groupCommentId: string }
    >({
      query: (body) => ({
        url: `/api/group-comment/${body.groupCommentId}`,
        method: "DELETE",
      }),
      invalidatesTags: (result, error, args) => [
        { type: "GroupComment" as const, id: "LIST" },
      ],
    }),
    getGroupComments: builder.query<
      { message: string; data: GroupComment[] },
      string | undefined
    >({
      query: (groupId) => {
        return {
          url: `/api/group-comments/${groupId}`,
          method: "GET",
        };
      },
      providesTags: (result, error, args) =>
        result?.data
          ? [
              { type: "GroupComment" as const, id: "LIST" },
              ...result.data.map((groupComment) => ({
                type: "GroupComment" as const,
                id: groupComment._id,
              })),
            ]
          : [{ type: "GroupComment" as const, id: "LIST" }],
    }),
  }),
});

export const {
  useAddGroupCommentMutation,
  useDeleteGroupCommentMutation,
  useGetGroupCommentsQuery,
} = groupCommentApiSlice;
