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

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getGroups: builder.query<Group[], void>({
      query: () => ({
        url: "/api/groups",
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
    addGroup: builder.mutation<null, AddGroupRequest>({
      query: (body) => ({
        url: "/api/group",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useGetGroupsQuery, useAddGroupMutation } = authApiSlice;
