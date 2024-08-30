import { apiSlice } from "./apiSlice";
import { Transaction } from "../type/Transaction";

export const transactionApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    addTransaction: builder.mutation<
      { message: string },
      { description: string; paymentIntentId: string }
    >({
      query: (body) => ({
        url: `/api/transaction`,
        method: "POST",
        body,
      }),
      invalidatesTags: (result, error, args) => [
        { type: "Transaction" as const, id: "LIST" },
      ],
    }),
    deleteTransaction: builder.mutation<
      { message: string },
      { transactionId: string }
    >({
      query: (body) => ({
        url: `/api/transaction/${body.transactionId}`,
        method: "DELETE",
      }),
      invalidatesTags: (result, error, args) => [
        { type: "Transaction" as const, id: "LIST" },
      ],
    }),
    getTransactions: builder.query<
      { message: string; data: Transaction[] },
      void
    >({
      query: () => {
        return {
          url: `/api/transactions`,
          method: "GET",
        };
      },
      providesTags: (result, error, args) =>
        result?.data
          ? [
              { type: "Transaction" as const, id: "LIST" },
              ...result.data.map((transaction) => ({
                type: "Transaction" as const,
                id: transaction._id,
              })),
            ]
          : [{ type: "Transaction" as const, id: "LIST" }],
    }),
  }),
});

export const {
  useAddTransactionMutation,
  useDeleteTransactionMutation,
  useGetTransactionsQuery,
} = transactionApiSlice;
