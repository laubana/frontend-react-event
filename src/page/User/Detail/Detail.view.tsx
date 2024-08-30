import { Elements } from "@stripe/react-stripe-js";

import { DetailProps } from "./Detail.props";
import { Container, Image, TitleContainer } from "./Detail.style";

import Button from "../../../component/Button";
import Card from "../../../component/Card";
import Flex from "../../../component/Flex";
import Grid from "../../../component/Grid";
import Loading from "../../../component/Loading";
import Modal from "../../../component/Modal";
import PaymentMethodForm from "../../../module/PaymentMethodForm";
import Text from "../../../component/Text";

const DetailView = (props: DetailProps) => {
  const {
    handleAddPaymentMethod,
    handleClose,
    handleDeletePaymentMethod,
    handleDeleteTransaction,
    handleSubmit,
    isLoading,
    isVisible,
    paymentMethods,
    stripePromise,
    transactions,
    user,
  } = props;

  return (
    <>
      {user ? (
        <Container>
          <Image src={user.imageUrl} />
          <TitleContainer>
            <Text sizing="large">Payment Method</Text>
            <Button onClick={handleAddPaymentMethod}>Add</Button>
          </TitleContainer>
          {0 < paymentMethods.length && (
            <>
              {paymentMethods.map((paymentMethod, index) => {
                return (
                  <Flex
                    style={{
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                    key={index}
                  >
                    <Card
                      brand={paymentMethod.brand}
                      lastDigits={paymentMethod.lastDigits}
                    />
                    <Button
                      onClick={() =>
                        handleDeletePaymentMethod(paymentMethod.id)
                      }
                      sizing="small"
                    >
                      Delete
                    </Button>
                  </Flex>
                );
              })}
            </>
          )}
          <TitleContainer>
            <Text sizing="large">Transaction</Text>
          </TitleContainer>
          {0 < transactions.length && (
            <Grid style={{ gap: "8px" }}>
              {transactions.map((transaction, index) => {
                return (
                  <Flex
                    style={{
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                    key={index}
                  >
                    <Text style={{ minWidth: 75 }}>
                      ${(transaction.amount / 100).toFixed(2)}
                    </Text>
                    <Text style={{ flexGrow: 1 }}>
                      {transaction.description}
                    </Text>
                    {0 < transaction.amount && (
                      <Button
                        onClick={() => handleDeleteTransaction(transaction._id)}
                        sizing="small"
                      >
                        Refund
                      </Button>
                    )}
                    <Button
                      onClick={() => {
                        window.open(transaction.receiptUrl);
                      }}
                      sizing="small"
                    >
                      Receipt
                    </Button>
                  </Flex>
                );
              })}
            </Grid>
          )}
        </Container>
      ) : (
        <Loading />
      )}
      <Loading isVisibile={isLoading} />
      <Modal isVisibile={isVisible} onClose={handleClose}>
        <Elements
          stripe={stripePromise}
          options={{
            currency: "cad",
            locale: "en",
            mode: "setup",
          }}
        >
          <PaymentMethodForm onSubmit={handleSubmit} />
        </Elements>
      </Modal>
    </>
  );
};

export default DetailView;
