import { FaCcVisa, FaCcMastercard } from "react-icons/fa";
import { RxBorderDotted } from "react-icons/rx";
import { DetailProps } from "./Detail.props";
import { Container, Image, TitleContainer } from "./Detail.style";
import Button from "../../../component/Button";
import Flex from "../../../component/Flex";
import Loading from "../../../component/Loading";
import Text from "../../../component/Text";
import Grid from "../../../component/Grid";
import Columns from "../../../component/Columns";

const DetailView = (props: DetailProps) => {
  const {
    handleAddPaymentMethod,
    handleDeletePaymentMethod,
    handleDeleteTransaction,
    isVisible,
    paymentMethods,
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
                    <Columns
                      columns="2 8"
                      style={{
                        alignItems: "center",
                      }}
                    >
                      <Flex>
                        {paymentMethod.brand === "visa" ? (
                          <FaCcVisa size={32} />
                        ) : paymentMethod.brand === "mastercard" ? (
                          <FaCcMastercard size={32} />
                        ) : (
                          <></>
                        )}
                        <RxBorderDotted size={32} />
                        <RxBorderDotted size={32} />
                        <RxBorderDotted size={32} />
                      </Flex>
                      <Text>{paymentMethod.lastDigits}</Text>
                    </Columns>
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
            <Text sizing="large">Payment</Text>
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
        <div style={{ padding: "32px", textAlign: "center" }}>
          <div className="spinner-border text-danger"></div>
        </div>
      )}
      <Loading isVisibile={isVisible} />
    </>
  );
};

export default DetailView;
