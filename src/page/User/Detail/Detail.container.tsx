import { useState } from "react";
import { useParams } from "react-router-dom";
import DetailView from "./Detail.view";
import { useGetUserQuery } from "../../../slice/userApiSlice";
import {
  useGetPaymentMethodsQuery,
  useAddPaymentMethodMutation,
  useDeletePaymentMethodMutation,
} from "../../../slice/paymentMethodApiSlice";
import {
  useDeleteTransactionMutation,
  useGetTransactionsQuery,
} from "../../../slice/transactionApiSlice";
import {
  useAddThreadMutation,
  useGetThreadMutation,
} from "../../../slice/threadApiSlice";

const Detail = (): JSX.Element => {
  const { userId } = useParams();

  const { data: user = { message: "", data: undefined } } =
    useGetUserQuery(userId);
  const {
    data: transactions = { message: "", data: [] },
    refetch: refetchTransactions,
  } = useGetTransactionsQuery();
  const { data: paymentMethods = { message: "", data: [] } } =
    useGetPaymentMethodsQuery();
  const [addThread] = useAddThreadMutation();
  const [getThread] = useGetThreadMutation();
  const [addPaymentMethod] = useAddPaymentMethodMutation();
  const [deletePaymentMethod] = useDeletePaymentMethodMutation();
  const [deleteTransaction] = useDeleteTransactionMutation();

  const [isVisible, setIsVisible] = useState<boolean>(false);

  const handleAddPaymentMethod = async () => {
    if (user.data && user.data.customerId) {
      setIsVisible(true);
      try {
        const response = await addPaymentMethod().unwrap();

        window.location.href = response.data.url;
      } catch (error) {
        setIsVisible(false);
      }
    }
  };

  const handleDeletePaymentMethod = (paymentMethodId: string) => {
    deletePaymentMethod({ paymentMethodId });
  };

  const handleDeleteTransaction = async (transactionId: string) => {
    const response = await addThread().unwrap();
    const main = async () => {
      try {
        const thread = await getThread(response.data._id);
        refetchTransactions();
      } catch (error) {
        console.error(error);
      }
    };
    main();
    await deleteTransaction({ threadId: response.data._id, transactionId });
  };

  const props = {
    paymentMethods: paymentMethods.data,
    handleAddPaymentMethod,
    handleDeletePaymentMethod,
    handleDeleteTransaction,
    isVisible,
    transactions: transactions.data,
    user: user.data,
  };

  return <DetailView {...props} />;
};

export default Detail;
