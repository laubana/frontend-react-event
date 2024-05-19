import { Card } from "../../../type/Card";
import { Transaction } from "../../../type/Transaction";
import { User } from "../../../type/User";

export interface DetailProps {
  handleAddPaymentMethod: () => void;
  handleDeletePaymentMethod: (paymentMethodId: string) => void;
  handleDeleteTransaction: (transactionId: string) => void;
  isVisible: boolean;
  paymentMethods: Card[];
  transactions: Transaction[];
  user: User | undefined;
}
