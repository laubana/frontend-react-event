import { apiSlice } from "./apiSlice";
import { Comment } from "../type/Comment";

export const commentApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    addComment: builder.mutation<
      { message: string; data: Comment },
      { eventId: string; value: string }
    >({
      query: (body) => ({
        url: `/api/comment`,
        method: "POST",
        body,
      }),
      invalidatesTags: (result, error, args) => [
        { type: "Comment" as const, id: "LIST" },
      ],
    }),
    deleteComment: builder.mutation<{ message: string }, { commentId: string }>(
      {
        query: (body) => ({
          url: `/api/comment/${body.commentId}`,
          method: "DELETE",
        }),
        invalidatesTags: (result, error, args) => [
          { type: "Comment" as const, id: "LIST" },
        ],
      }
    ),
    getComments: builder.query<
      { message: string; data: Comment[] },
      string | undefined
    >({
      query: (eventId) => {
        return {
          url: `/api/comments/${eventId}`,
          method: "GET",
        };
      },
      providesTags: (result, error, args) =>
        result?.data
          ? [
              { type: "Comment" as const, id: "LIST" },
              ...result.data.map((comment) => ({
                type: "Comment" as const,
                id: comment._id,
              })),
            ]
          : [{ type: "Registration" as const, id: "LIST" }],
    }),
  }),
});

export const {
  useAddCommentMutation,
  useDeleteCommentMutation,
  useGetCommentsQuery,
} = commentApiSlice;
