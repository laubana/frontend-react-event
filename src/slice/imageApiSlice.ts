import { apiSlice } from "./apiSlice";
import { Image } from "../type/Image";

export const imageApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getImages: builder.query<Image[], { groupId?: string }>({
      query: (args) =>
        args.groupId
          ? {
              url: `/api/images`,
              method: "GET",
              params: { groupId: args.groupId },
            }
          : null,
      providesTags: (result, error, args) =>
        result
          ? [
              { type: "Image" as const, id: "LIST" },
              ...result.map((image) => ({
                type: "Image" as const,
                id: image._id,
              })),
            ]
          : [{ type: "Registration" as const, id: "LIST" }],
    }),
    addImage: builder.mutation<Comment, { groupId: string; imageUrl: string }>({
      query: (body) => ({
        url: `/api/image`,
        method: "POST",
        body,
      }),
      invalidatesTags: (result, error, args) => [
        { type: "Image" as const, id: "LIST" },
      ],
    }),
    deleteImage: builder.mutation<void, { imageId: string }>({
      query: (body) => ({
        url: `/api/comment/user`,
        method: "DELETE",
        body,
      }),
      invalidatesTags: (result, error, args) => [
        { type: "Comment" as const, id: "LIST" },
      ],
    }),
  }),
});

export const {
  useGetImagesQuery,
  useAddImageMutation,
  useDeleteImageMutation,
} = imageApiSlice;
