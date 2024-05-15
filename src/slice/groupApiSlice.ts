import { apiSlice } from "./apiSlice";
import { Group } from "../type/Group";

type AddGroupRequest = {
  categoryId: string;
  userId: string;
  imageUrl: string;
  name: string;
  address: string;
  latitude: string;
  longitude: string;
  description: string;
};

export const groupApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getGroups: builder.query<Group[], void>({
      query: () => ({
        url: `/api/groups`,
        method: "GET",
      }),
      providesTags: (result) =>
        result
          ? [
              { type: "Group" as const, id: "LIST" },
              ...result.map((group) => ({
                type: "Group" as const,
                id: group._id,
              })),
            ]
          : [{ type: "Group" as const, id: "LIST" }],
    }),
    getGroup: builder.query<Group, string | undefined>({
      query: (groupId) =>
        groupId
          ? {
              url: `/api/group`,
              method: "GET",
              params: { groupId },
            }
          : null,
      providesTags: (result) =>
        result
          ? [{ type: "Group" as const, id: result._id }]
          : [{ type: "Group" as const }],
    }),
    addGroup: builder.mutation<null, AddGroupRequest>({
      query: (body) => ({
        url: `/api/group`,
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useGetGroupsQuery, useGetGroupQuery, useAddGroupMutation } =
  groupApiSlice;
