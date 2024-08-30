import { Stripe } from "@stripe/stripe-js";
import { PaymentMethod } from "../../../type/PaymentMethod";
import { Transaction } from "../../../type/Transaction";
import { User } from "../../../type/User";

export interface DetailProps {
  handleAddPaymentMethod: () => void;
  handleClose: () => void;
  handleDeletePaymentMethod: (paymentMethodId: string) => void;
  handleDeleteTransaction: (transactionId: string) => void;
  handleSubmit: () => void;
  isLoading: boolean;
  isVisible: boolean;
  paymentMethods: PaymentMethod[];
  stripePromise: Promise<Stripe | null>;
  transactions: Transaction[];
  user: User | undefined;
}
