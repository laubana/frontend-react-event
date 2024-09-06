import { apiSlice } from "./apiSlice";

import { GroupRegistration } from "../type/GroupRegistration";

export const groupRegistrationApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    addGroupRegistration: builder.mutation<
      { message: string; data: GroupRegistration },
      { groupId: string }
    >({
      query: (body) => ({
        url: `/api/group-registration`,
        method: "POST",
        body,
      }),
      invalidatesTags: (result, error, args) => [
        { type: "GroupRegistration" as const, id: "LIST" },
        { type: "GroupRegistration" as const, id: "ITEM" },
      ],
    }),
    deleteGroupRegistration: builder.mutation<
      { meesage: string },
      { groupRegistrationId: string }
    >({
      query: (body) => ({
        url: `/api/registration/${body.groupRegistrationId}`,
        method: "DELETE",
      }),
      invalidatesTags: (result, error, args) => [
        { type: "GroupRegistration" as const, id: "LIST" },
        { type: "GroupRegistration" as const, id: "ITEM" },
      ],
    }),
    getGroupRegistration: builder.query<
      { message: string; data: GroupRegistration },
      string | undefined
    >({
      query: (groupId) => {
        return {
          url: `/api/group-registration/${groupId}`,
          method: "GET",
        };
      },
      providesTags: (result, error, args) => [
        { type: "GroupRegistration" as const, id: "ITEM" },
      ],
    }),
    getGroupRegistrations: builder.query<
      { message: string; data: GroupRegistration[] },
      string | undefined
    >({
      query: (groupId) => {
        return {
          url: `/api/group-registrations/${groupId}`,
          method: "GET",
        };
      },
      providesTags: (result, error, args) =>
        result?.data
          ? [
              { type: "GroupRegistration" as const, id: "LIST" },
              ...result.data.map((registration) => ({
                type: "GroupRegistration" as const,
                id: registration._id,
              })),
            ]
          : [{ type: "GroupRegistration" as const, id: "LIST" }],
    }),
  }),
});

export const {
  useAddGroupRegistrationMutation,
  useDeleteGroupRegistrationMutation,
  useGetGroupRegistrationQuery,
  useGetGroupRegistrationsQuery,
} = groupRegistrationApiSlice;
