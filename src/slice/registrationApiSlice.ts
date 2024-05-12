import { apiSlice } from "./apiSlice";
import { Registration } from "../type/Registration";

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getRegistrationsGroup: builder.query<Registration[], { groupId?: string }>({
      query: (args) =>
        args.groupId
          ? {
              url: `/api/registrations/group`,
              method: "GET",
              params: { groupId: args.groupId },
            }
          : null,
      providesTags: (result, error, args) =>
        result
          ? [
              { type: "Registration" as const, id: "LIST" },
              ...result.map((registration) => ({
                type: "Registration" as const,
                id: registration._id,
              })),
            ]
          : [{ type: "Registration" as const, id: "LIST" }],
    }),
    getRegistrationGroupUser: builder.query<Registration, { groupId?: string }>(
      {
        query: (args) =>
          args.groupId
            ? {
                url: `/api/registration/group/user`,
                method: "GET",
                params: { groupId: args.groupId },
              }
            : null,
        providesTags: (result, error, args) =>
          result
            ? [{ type: "Registration" as const, id: "ITEM" }]
            : [{ type: "Registration" as const, id: "ITEM" }],
      }
    ),
    addRegistration: builder.mutation<Registration, { groupId: string }>({
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
    deleteRegistrationGroupUser: builder.mutation<void, { groupId: string }>({
      query: (body) => ({
        url: `/api/registration/group/user`,
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
  useGetRegistrationsGroupQuery,
  useGetRegistrationGroupUserQuery,
  useAddRegistrationMutation,
  useDeleteRegistrationGroupUserMutation,
} = authApiSlice;
