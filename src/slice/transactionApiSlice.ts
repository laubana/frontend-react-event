import { apiSlice } from "./apiSlice";
import { Transaction } from "../type/Transaction";

export const transactionApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
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
    deleteTransaction: builder.mutation<
      { message: string },
      { threadId: string; transactionId: string }
    >({
      query: (body) => ({
        url: `/api/transaction`,
        method: "DELETE",
        body,
      }),
      invalidatesTags: (result, error, args) => [
        { type: "Transaction" as const, id: "LIST" },
      ],
    }),
    verifyTransaction: builder.mutation<any, { transactionId: string }>({
      query: (body) => {
        return {
          url: `/api/transaction`,
          method: "POST",
          body,
        };
      },
    }),
  }),
});

export const {
  useGetTransactionsQuery,
  useDeleteTransactionMutation,
  useVerifyTransactionMutation,
} = transactionApiSlice;
