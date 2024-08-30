import { loadStripe } from "@stripe/stripe-js";
import { useState } from "react";
import { useParams } from "react-router-dom";

import DetailView from "./Detail.view";

import {
  useDeletePaymentMethodMutation,
  useGetPaymentMethodsQuery,
} from "../../../slice/stripeApiSlice";
import {
  useDeleteTransactionMutation,
  useGetTransactionsQuery,
} from "../../../slice/transactionApiSlice";
import { useGetUserQuery } from "../../../slice/userApiSlice";

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC as string);

const Detail = (): JSX.Element => {
  const { userId } = useParams();
  const {
    data: paymentMethods = { message: "", data: [] },
    refetch: refetchPaymentMethods,
  } = useGetPaymentMethodsQuery();
  const { data: transactions = { message: "", data: [] } } =
    useGetTransactionsQuery();
  const { data: user = { message: "", data: undefined } } =
    useGetUserQuery(userId);
  const [deletePaymentMethod] = useDeletePaymentMethodMutation();
  const [deleteTransaction] = useDeleteTransactionMutation();

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const handleAddPaymentMethod = async () => {
    if (user.data && user.data.customerId) {
      setIsVisible(true);
    }
  };

  const handleClose = () => {
    setIsVisible(false);
  };

  const handleDeletePaymentMethod = async (paymentMethodId: string) => {
    setIsLoading(true);
    await deletePaymentMethod({ paymentMethodId });
    await refetchPaymentMethods();
    setIsLoading(false);
  };

  const handleDeleteTransaction = async (transactionId: string) => {
    await deleteTransaction({ transactionId });
  };

  const handleSubmit = async () => {
    await refetchPaymentMethods();
    setIsVisible(false);
  };

  const props = {
    handleAddPaymentMethod,
    handleClose,
    handleDeletePaymentMethod,
    handleDeleteTransaction,
    handleSubmit,
    isLoading,
    isVisible,
    paymentMethods: paymentMethods.data,
    stripePromise,
    transactions: transactions.data,
    user: user.data,
  };

  return <DetailView {...props} />;
};

export default Detail;
