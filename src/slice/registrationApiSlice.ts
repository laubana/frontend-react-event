import { apiSlice } from "./apiSlice";
import { Registration } from "../type/Registration";

export const registrationApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getRegistrationsEvent: builder.query<
      { message: string; data: Registration[] },
      string | undefined
    >({
      query: (eventId) => {
        return {
          url: `/api/registrations/event`,
          method: "GET",
          params: { eventId },
        };
      },
      providesTags: (result, error, args) =>
        result?.data
          ? [
              { type: "Registration" as const, id: "LIST" },
              ...result.data.map((registration) => ({
                type: "Registration" as const,
                id: registration._id,
              })),
            ]
          : [{ type: "Registration" as const, id: "LIST" }],
    }),
    getRegistration: builder.query<
      { message: string; data: Registration },
      string | undefined
    >({
      query: (eventId) => {
        return {
          url: `/api/registration`,
          method: "GET",
          params: { eventId },
        };
      },
      providesTags: (result, error, args) => [
        { type: "Registration" as const, id: "ITEM" },
      ],
    }),
    addRegistration: builder.mutation<
      { message: string; data: Registration },
      { eventId: string }
    >({
      query: (body) => ({
        url: `/api/registration`,
        method: "POST",
        body,
      }),
      invalidatesTags: (result, error, args) => [
        { type: "Registration" as const, id: "LIST" },
        { type: "Registration" as const, id: "ITEM" },
      ],
    }),
    deleteRegistration: builder.mutation<
      { meesage: string },
      { registrationId: string }
    >({
      query: (body) => ({
        url: `/api/registration`,
        method: "DELETE",
        body,
      }),
      invalidatesTags: (result, error, args) => [
        { type: "Registration" as const, id: "LIST" },
        { type: "Registration" as const, id: "ITEM" },
      ],
    }),
  }),
});

export const {
  useGetRegistrationsEventQuery,
  useGetRegistrationQuery,
  useAddRegistrationMutation,
  useDeleteRegistrationMutation,
} = registrationApiSlice;
