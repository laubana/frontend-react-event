import { apiSlice } from "./apiSlice";
import { Comment } from "../type/Comment";

export const commentApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getComments: builder.query<
      { message: string; data: Comment[] },
      string | undefined
    >({
      query: (eventId) => {
        return {
          url: `/api/comments`,
          method: "GET",
          params: { eventId },
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
          url: `/api/comment/user`,
          method: "DELETE",
          body,
        }),
        invalidatesTags: (result, error, args) => [
          { type: "Comment" as const, id: "LIST" },
        ],
      }
    ),
  }),
});

export const {
  useGetCommentsQuery,
  useAddCommentMutation,
  useDeleteCommentMutation,
} = commentApiSlice;
