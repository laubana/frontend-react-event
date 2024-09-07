import { apiSlice } from "./apiSlice";

import { EventComment } from "../type/EventComment";

export const eventCommentApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    addEventComment: builder.mutation<
      { message: string; data: EventComment },
      { eventId: string; value: string }
    >({
      query: (body) => ({
        url: `/api/event-comment`,
        method: "POST",
        body,
      }),
      invalidatesTags: (result, error, args) => [
        { type: "EventComment" as const, id: "LIST" },
      ],
    }),
    deleteEventComment: builder.mutation<
      { message: string },
      { eventCommentId: string }
    >({
      query: (body) => ({
        url: `/api/event-comment/${body.eventCommentId}`,
        method: "DELETE",
      }),
      invalidatesTags: (result, error, args) => [
        { type: "EventComment" as const, id: "LIST" },
      ],
    }),
    getEventComments: builder.query<
      { message: string; data: EventComment[] },
      string | undefined
    >({
      query: (eventId) => {
        return {
          url: `/api/event-comments/${eventId}`,
          method: "GET",
        };
      },
      providesTags: (result, error, args) =>
        result?.data
          ? [
              { type: "EventComment" as const, id: "LIST" },
              ...result.data.map((eventComment) => ({
                type: "EventComment" as const,
                id: eventComment._id,
              })),
            ]
          : [{ type: "EventComment" as const, id: "LIST" }],
    }),
  }),
});

export const {
  useAddEventCommentMutation,
  useDeleteEventCommentMutation,
  useGetEventCommentsQuery,
} = eventCommentApiSlice;
