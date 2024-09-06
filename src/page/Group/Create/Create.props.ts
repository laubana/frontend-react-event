import { Stripe } from "@stripe/stripe-js";

import { Category } from "../../../type/Category";
import { GroupForm } from "../../../type/GroupForm";
import { PaymentMethod } from "../../../type/PaymentMethod";

export interface CreateProps {
  categorys: Category[];
  clientSecret: string;
  handleClickNewCard: () => void;
  handleGoBack: () => void;
  handleNext: (values: GroupForm) => void;
  handleSubmitExistingCard: (PaymentMethodId: string) => void;
  handleSubmitNewCard: (paymentIntentId: string) => void;
  initialValues: GroupForm;
  isLoading: boolean;
  paymentMethods: PaymentMethod[];
  stage: number;
  stripePromise: Promise<Stripe | null>;
}
