import { apiSlice } from "./apiSlice";
import { EventRegistration } from "../type/EventRegistration";

export const eventRegistrationApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    addEventRegistration: builder.mutation<
      { message: string; data: EventRegistration },
      { eventId: string }
    >({
      query: (body) => ({
        url: `/api/event-registration`,
        method: "POST",
        body,
      }),
      invalidatesTags: (result, error, args) => [
        { type: "EventRegistration" as const, id: "LIST" },
        { type: "EventRegistration" as const, id: "ITEM" },
      ],
    }),
    deleteEventRegistration: builder.mutation<
      { meesage: string },
      { eventRegistrationId: string }
    >({
      query: (body) => ({
        url: `/api/event-registration/${body.eventRegistrationId}`,
        method: "DELETE",
      }),
      invalidatesTags: (result, error, args) => [
        { type: "EventRegistration" as const, id: "LIST" },
        { type: "EventRegistration" as const, id: "ITEM" },
      ],
    }),
    getEventRegistration: builder.query<
      { message: string; data: EventRegistration },
      string | undefined
    >({
      query: (eventId) => {
        return {
          url: `/api/event-registration/${eventId}`,
          method: "GET",
        };
      },
      providesTags: (result, error, args) => [
        { type: "EventRegistration" as const, id: "ITEM" },
      ],
    }),
    getEventRegistrations: builder.query<
      { message: string; data: EventRegistration[] },
      string | undefined
    >({
      query: (eventId) => {
        return {
          url: `/api/event-registrations/${eventId}`,
          method: "GET",
        };
      },
      providesTags: (result, error, args) =>
        result?.data
          ? [
              { type: "EventRegistration" as const, id: "LIST" },
              ...result.data.map((eventRegistration) => ({
                type: "EventRegistration" as const,
                id: eventRegistration._id,
              })),
            ]
          : [{ type: "EventRegistration" as const, id: "LIST" }],
    }),
  }),
});

export const {} = eventRegistrationApiSlice;
