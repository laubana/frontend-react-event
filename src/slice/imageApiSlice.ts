import { apiSlice } from "./apiSlice";
import { Image } from "../type/Image";

export const imageApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    addImage: builder.mutation<
      { message: string; data: Comment },
      { eventId: string; imageUrl: string }
    >({
      query: (body) => ({
        url: `/api/image`,
        method: "POST",
        body,
      }),
      invalidatesTags: (result, error, args) => [
        { type: "Image" as const, id: "LIST" },
      ],
    }),
    deleteImage: builder.mutation<{ message: string }, { imageId: string }>({
      query: (body) => ({
        url: `/api/image/${body.imageId}`,
        method: "DELETE",
      }),
      invalidatesTags: (result, error, args) => [
        { type: "Image" as const, id: "LIST" },
      ],
    }),
    getImages: builder.query<
      { message: string; data: Image[] },
      string | undefined
    >({
      query: (eventId) => {
        return {
          url: `/api/images/${eventId}`,
          method: "GET",
        };
      },
      providesTags: (result, error, args) =>
        result?.data
          ? [
              { type: "Image" as const, id: "LIST" },
              ...result.data.map((image) => ({
                type: "Image" as const,
                id: image._id,
              })),
            ]
          : [{ type: "Registration" as const, id: "LIST" }],
    }),
  }),
});

export const {
  useAddImageMutation,
  useDeleteImageMutation,
  useGetImagesQuery,
} = imageApiSlice;
