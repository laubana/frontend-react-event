import { apiSlice } from "./apiSlice";

import { Group } from "../type/Group";

type AddGroupPayload = {
  address: string;
  categoryId: string;
  description: string;
  imageUrl: string;
  latitude: number;
  longitude: number;
  name: string;
  paymentIntentId?: string;
  paymentMethodId?: string;
  thumbnailUrl: string;
};

type UpdateGroupPayload = {
  address: string;
  categoryId: string;
  description: string;
  groupId: string;
  imageUrl: string;
  latitude: number;
  longitude: number;
  name: string;
  thumbnailUrl: string;
};

export const groupApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    addGroup: builder.mutation<
      { message: string; data: Group },
      AddGroupPayload
    >({
      query: (body) => ({
        url: `/api/group`,
        method: "POST",
        body,
      }),
    }),
    getAllGroups: builder.query<{ message: string; data: Group[] }, void>({
      query: () => ({
        url: `/api/groups`,
        method: "GET",
      }),
      providesTags: (result) =>
        result?.data
          ? [
              { type: "Group" as const, id: "LIST" },
              ...result.data.map((group) => ({
                type: "Group" as const,
                id: group._id,
              })),
            ]
          : [{ type: "Group" as const, id: "LIST" }],
    }),
    getGroup: builder.query<
      { message: string; data: Group },
      string | undefined
    >({
      query: (groupId) => {
        return {
          url: `/api/group/${groupId}`,
          method: "GET",
        };
      },
      providesTags: (result) =>
        result?.data
          ? [{ type: "Group" as const, id: result.data._id }]
          : [{ type: "Group" as const }],
    }),
    updateGroup: builder.mutation<
      { message: string; data: Group },
      UpdateGroupPayload
    >({
      query: (body) => ({
        url: `/api/group/${body.groupId}`,
        method: "PUT",
        body,
      }),
    }),
  }),
});

export const {
  useAddGroupMutation,
  useGetAllGroupsQuery,
  useGetGroupQuery,
  useUpdateGroupMutation,
} = groupApiSlice;
