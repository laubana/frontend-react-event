import { apiSlice } from "./apiSlice";

import { Event } from "../type/Event";
import { Place } from "../type/Place";

type AddEventPayload = {
  dateTimes: Date[];
  description: string;
  fee: string;
  groupId: string;
  name: string;
  places: Place[];
};

export const eventApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    addEvent: builder.mutation<
      { message: string; data: Event },
      AddEventPayload
    >({
      query: (body) => ({
        url: `/api/event`,
        method: "POST",
        body,
      }),
    }),
    getEvent: builder.query<
      { message: string; data: Event },
      string | undefined
    >({
      query: (eventId) => {
        return {
          url: `/api/event/${eventId}`,
          method: "GET",
        };
      },
      providesTags: (result) =>
        result?.data
          ? [{ type: "Event" as const, id: result.data._id }]
          : [{ type: "Event" as const }],
    }),
    getEvents: builder.query<{ message: string; data: Event[] }, void>({
      query: () => ({
        url: `/api/events`,
        method: "GET",
      }),
      providesTags: (result) =>
        result?.data
          ? [
              { type: "Event" as const, id: "LIST" },
              ...result.data.map((event) => ({
                type: "Event" as const,
                id: event._id,
              })),
            ]
          : [{ type: "Event" as const, id: "LIST" }],
    }),
  }),
});

export const { useAddEventMutation, useGetEventQuery, useGetEventsQuery } =
  eventApiSlice;
