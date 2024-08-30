import { Stripe } from "@stripe/stripe-js";
import { ImageType } from "react-images-uploading";

import { Place } from "../../../type/Place";
import { Category } from "../../../type/Category";
import { Option } from "../../../type/Option";
import { PaymentMethod } from "../../../type/PaymentMethod";

export type Form = {
  category: Option | undefined;
  thumbnail: ImageType | undefined;
  image: ImageType | undefined;
  name: string;
  place: Place | undefined;
  address: string;
  latitude: string;
  longitude: string;
  description: string;
};

export interface CreateProps {
  categorys: Category[] | undefined;
  clientSecret: string;
  handleClickNewCard: () => void;
  handleGoBack: () => void;
  handleNext: (values: Form) => void;
  handleSubmitExistingCard: (PaymentMethodId: string) => void;
  handleSubmitNewCard: (paymentIntentId: string) => void;
  initialValues: Form;
  isLoading: boolean;
  paymentMethods: PaymentMethod[];
  stage: number;
  stripePromise: Promise<Stripe | null>;
}
