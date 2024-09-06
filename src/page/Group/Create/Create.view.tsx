import "mapbox-gl/dist/mapbox-gl.css";

import { Elements } from "@stripe/react-stripe-js";
import { FaRegCreditCard } from "react-icons/fa6";

import { CreateProps } from "./Create.props";
import { Container } from "./Create.style";

import Accordian from "../../../component/Accordian";
import Button from "../../../component/Button";
import Card from "../../../component/Card";
import Flex from "../../../component/Flex";
import Grid from "../../../component/Grid";
import Label from "../../../component/Label";
import Loading from "../../../component/Loading";
import PaymentIntentForm from "../../../module/PaymentIntentForm";
import Text from "../../../component/Text";
import GroupForm from "../../../component/GroupForm";

const Create = (props: CreateProps) => {
  const {
    categorys,
    clientSecret,
    handleClickNewCard,
    handleGoBack,
    handleNext,
    handleSubmitExistingCard,
    handleSubmitNewCard,
    initialValues,
    isLoading,
    paymentMethods,
    stage,
    stripePromise,
  } = props;

  return (
    <>
      {categorys ? (
        <Container>
          <Text sizing="large">Create Group</Text>
          {stage === 0 ? (
            <>
              <GroupForm
                categorys={categorys}
                label="Next"
                onSubmit={handleNext}
                values={initialValues}
              />
              <Button coloring="black" onClick={handleGoBack} block>
                Go Back
              </Button>
            </>
          ) : stage === 1 ? (
            <>
              <Grid>
                <Label>Payment</Label>
                {0 < paymentMethods.length && (
                  <>
                    {paymentMethods.map((paymentMethod, index) => {
                      return (
                        <Accordian
                          key={paymentMethod.id}
                          title={
                            <Card
                              brand={paymentMethod.brand}
                              lastDigits={paymentMethod.lastDigits}
                            />
                          }
                        >
                          <Flex
                            style={{
                              alignItems: "center",
                              justifyContent: "space-between",
                            }}
                            key={index}
                          >
                            <Button
                              block
                              onClick={() =>
                                handleSubmitExistingCard(paymentMethod.id)
                              }
                            >
                              <FaRegCreditCard size={16} />
                              Create
                            </Button>
                          </Flex>
                        </Accordian>
                      );
                    })}
                  </>
                )}
                <Accordian
                  onOpen={handleClickNewCard}
                  title={
                    <Flex style={{ alignItems: "center" }}>
                      <FaRegCreditCard size={32} />
                      <Text>New Card</Text>
                    </Flex>
                  }
                >
                  {clientSecret ? (
                    <Elements
                      stripe={stripePromise}
                      options={{
                        clientSecret: clientSecret,
                        locale: "en",
                      }}
                    >
                      <PaymentIntentForm onSubmit={handleSubmitNewCard} />
                    </Elements>
                  ) : null}
                </Accordian>
              </Grid>
              <Button coloring="black" onClick={handleGoBack} block>
                Go Back
              </Button>
            </>
          ) : null}
        </Container>
      ) : (
        <Loading />
      )}
      <Loading isVisibile={isLoading} />
    </>
  );
};

export default Create;
