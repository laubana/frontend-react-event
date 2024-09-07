import { apiSlice } from "./apiSlice";
import { EventImage } from "../type/EventImage";

export const eventImageApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    addEventImage: builder.mutation<
      { message: string; data: Comment },
      { eventId: string; imageUrl: string }
    >({
      query: (body) => ({
        url: `/api/event-image`,
        method: "POST",
        body,
      }),
      invalidatesTags: (result, error, args) => [
        { type: "EventImage" as const, id: "LIST" },
      ],
    }),
    deleteEventImage: builder.mutation<
      { message: string },
      { eventImageId: string }
    >({
      query: (body) => ({
        url: `/api/event-image/${body.eventImageId}`,
        method: "DELETE",
      }),
      invalidatesTags: (result, error, args) => [
        { type: "EventImage" as const, id: "LIST" },
      ],
    }),
    getEventImages: builder.query<
      { message: string; data: EventImage[] },
      string | undefined
    >({
      query: (eventId) => {
        return {
          url: `/api/event-images/${eventId}`,
          method: "GET",
        };
      },
      providesTags: (result, error, args) =>
        result?.data
          ? [
              { type: "EventImage" as const, id: "LIST" },
              ...result.data.map((image) => ({
                type: "EventImage" as const,
                id: image._id,
              })),
            ]
          : [{ type: "EventImage" as const, id: "LIST" }],
    }),
  }),
});

export const {
  useAddEventImageMutation,
  useDeleteEventImageMutation,
  useGetEventImagesQuery,
} = eventImageApiSlice;
