import { User } from "./User";

export type Transaction = {
  amount: number;
  chargeId: string;
  description: string;
  _id: string;
  receiptUrl: string;
  user: User;
};
