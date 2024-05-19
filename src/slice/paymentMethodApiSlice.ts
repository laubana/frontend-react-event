import { apiSlice } from "./apiSlice";
import { PaymentMethod } from "../type/PaymentMethod";

export const paymentMethodApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getPaymentMethods: builder.query<
      { message: string; data: PaymentMethod[] },
      void
    >({
      query: (customerId) => {
        return {
          url: `/api/payment-methods`,
          method: "GET",
          params: { customerId },
        };
      },
      providesTags: (result) =>
        result
          ? [{ type: "PaymentMethod" as const, id: "LIST" }]
          : [{ type: "PaymentMethod" as const }],
    }),
    addPaymentMethod: builder.mutation<
      { message: string; data: { url: string } },
      void
    >({
      query: (body) => ({
        url: `/api/payment-method`,
        method: "POST",
      }),
    }),
    deletePaymentMethod: builder.mutation<
      { message: string },
      { paymentMethodId: string }
    >({
      query: (body) => ({
        url: `/api/payment-method`,
        method: "DELETE",
        body,
      }),
      invalidatesTags: (result, error, args) => [
        { type: "PaymentMethod" as const, id: "LIST" },
      ],
    }),
  }),
});

export const {
  useGetPaymentMethodsQuery,
  useAddPaymentMethodMutation,
  useDeletePaymentMethodMutation,
} = paymentMethodApiSlice;
