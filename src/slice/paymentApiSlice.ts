import { apiSlice } from "./apiSlice";
import { Payment } from "../type/Payment";

export const chargeApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getPayments: builder.query<Payment[], string | undefined>({
      query: (customerId) => {
        return {
          url: `/api/payments`,
          method: "GET",
          params: { customerId },
        };
      },
      providesTags: (result) =>
        result
          ? [{ type: "Payment" as const }]
          : [{ type: "Payment" as const }],
    }),
  }),
});

export const { useGetPaymentsQuery } = chargeApiSlice;
