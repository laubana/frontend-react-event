import { apiSlice } from "./apiSlice";

import { PaymentIntent } from "../type/PaymentIntent";
import { PaymentMethod } from "../type/PaymentMethod";
import { SetupIntent } from "../type/SetupIntent";

export const stripeApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    addPaymentIntent: builder.mutation<
      { message: string; data: PaymentIntent },
      { amount: number; paymentMethodId?: string }
    >({
      query: (body) => ({
        url: `/stripe/payment-intent`,
        method: "POST",
        body,
      }),
    }),
    addSetupIntent: builder.mutation<
      { message: string; data: SetupIntent },
      void
    >({
      query: (body) => ({
        url: `/stripe/setup-intent`,
        method: "POST",
      }),
    }),
    deletePaymentMethod: builder.mutation<
      { message: string },
      { paymentMethodId: string }
    >({
      query: (body) => ({
        url: `/stripe/payment-method`,
        method: "DELETE",
        body,
      }),
    }),
    getPaymentMethods: builder.query<
      { message: string; data: PaymentMethod[] },
      void
    >({
      query: (body) => {
        return {
          url: `/stripe/payment-methods`,
          method: "GET",
        };
      },
      providesTags: (result) =>
        result
          ? [{ type: "PaymentMethod" as const, id: "LIST" }]
          : [{ type: "PaymentMethod" as const }],
    }),
  }),
});

export const {
  useAddPaymentIntentMutation,
  useAddSetupIntentMutation,
  useDeletePaymentMethodMutation,
  useGetPaymentMethodsQuery,
} = stripeApiSlice;
