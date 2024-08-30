import {
  PaymentElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import React, { FormEvent, useState } from "react";
import { FaRegCreditCard } from "react-icons/fa";

import { PaymentIntentFormProps } from "./PaymentIntentForm.props";
import { Container, Form } from "./PaymentIntentForm.style";

import Button from "../../component/Button";
import Loading from "../../component/Loading";
import { useAddSetupIntentMutation } from "../../slice/stripeApiSlice";

const PaymentIntentFormComponent = (
  props: PaymentIntentFormProps
): JSX.Element => {
  const { onSubmit } = props;

  const [addSetupIntent] = useAddSetupIntentMutation();

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    try {
      event.preventDefault();

      if (!stripe || !elements) {
        return;
      }

      const { error: submitError } = await elements.submit();

      if (submitError && submitError.message) {
        return;
      }

      setIsLoading(true);

      const { error: confirmError, paymentIntent } =
        await stripe.confirmPayment({
          elements,
          redirect: "if_required",
          confirmParams: {
            return_url: "http://localhost:3000/",
          },
        });

      if (confirmError && confirmError.message) {
        return;
      }

      if (paymentIntent?.id) {
        onSubmit(paymentIntent.id);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {stripe && elements ? (
        <Form onSubmit={handleSubmit}>
          <Container>
            <PaymentElement options={{ terms: { card: "never" } }} />
            <div
              style={{
                color: "#30313d",
                fontFamily:
                  "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
                fontSize: "0.93rem",
                fontWeight: 400,
                textAlign: "right",
              }}
            >
              Powered by Stripe
            </div>
          </Container>
          <Button type="submit">
            <FaRegCreditCard size={16} />
            Create
          </Button>
        </Form>
      ) : null}
      <Loading isVisibile={isLoading} />
    </>
  );
};

export default React.memo(PaymentIntentFormComponent);
