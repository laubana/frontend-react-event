import { apiSlice } from "./apiSlice";

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    uploadImage: builder.mutation<{ message: string; data: string }, FormData>({
      query: (body) => ({
        url: `/s3/upload-image`,
        method: "POST",
        body,
        formData: true,
      }),
    }),
  }),
});

export const { useUploadImageMutation } = authApiSlice;
