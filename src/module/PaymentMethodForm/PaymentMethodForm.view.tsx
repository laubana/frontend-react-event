import {
  PaymentElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import React, { FormEvent, useState } from "react";

import { PaymentMethodFormProps } from "./PaymentMethodForm.props";
import { Container, Form } from "./PaymentMethodForm.style";

import Button from "../../component/Button";
import Loading from "../../component/Loading";
import { useAddSetupIntentMutation } from "../../slice/stripeApiSlice";

const PaymentMethodFormComponent = (
  props: PaymentMethodFormProps
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

      const addSetupIntentResponse = await addSetupIntent();
      const addSetupIntentData = addSetupIntentResponse.data;

      if (addSetupIntentData?.data.client_secret) {
        const { error: confirmError } = await stripe.confirmSetup({
          elements,
          clientSecret: addSetupIntentData.data.client_secret,
          redirect: "if_required",
          confirmParams: {
            return_url: "http://localhost:3000/",
          },
        });

        if (confirmError && confirmError.message) {
          return;
        }

        onSubmit();
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
          <Button type="submit">Add</Button>
        </Form>
      ) : null}
      <Loading isVisibile={isLoading} />
    </>
  );
};

export default React.memo(PaymentMethodFormComponent);
