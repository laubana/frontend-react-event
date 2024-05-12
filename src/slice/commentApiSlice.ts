import { apiSlice } from "./apiSlice";
import { Comment } from "../type/Comment";

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getCommentsGroup: builder.query<Comment[], { groupId?: string }>({
      query: (args) =>
        args.groupId
          ? {
              url: `/api/comments/group`,
              method: "GET",
              params: { groupId: args.groupId },
            }
          : null,
      providesTags: (result, error, args) =>
        result
          ? [
              { type: "Comment" as const, id: "LIST" },
              ...result.map((comment) => ({
                type: "Comment" as const,
                id: comment._id,
              })),
            ]
          : [{ type: "Registration" as const, id: "LIST" }],
    }),
    addComment: builder.mutation<Comment, { groupId: string; value: string }>({
      query: (body) => ({
        url: `/api/comment`,
        method: "POST",
        body,
      }),
      invalidatesTags: (result, error, args) => [
        { type: "Comment" as const, id: "LIST" },
      ],
    }),
    deleteCommentUser: builder.mutation<void, { commentId: string }>({
      query: (body) => ({
        url: `/api/comment/user`,
        method: "DELETE",
        body,
      }),
      invalidatesTags: (result, error, args) => [
        { type: "Comment" as const, id: "LIST" },
      ],
    }),
  }),
});

export const {
  useGetCommentsGroupQuery,
  useAddCommentMutation,
  useDeleteCommentUserMutation,
} = authApiSlice;
