import React from "react";
import {
  FaCcAmex,
  FaCcDiscover,
  FaCcJcb,
  FaCcMastercard,
  FaCcVisa,
  FaRegCreditCard,
} from "react-icons/fa";
import { RxBorderDotted } from "react-icons/rx";

import { CardProps } from "./Card.props";
import { Container } from "./Card.style";

import Flex from "../Flex";
import Text from "../Text";

const CardComponent = ({ brand, lastDigits }: CardProps): JSX.Element => {
  return (
    <Container>
      <Flex style={{ alignItems: "center" }}>
        {brand === "visa" ? (
          <FaCcVisa size={32} />
        ) : brand === "mastercard" ? (
          <FaCcMastercard size={32} />
        ) : brand === "jcb" ? (
          <FaCcJcb size={32} />
        ) : brand === "discover" ? (
          <FaCcDiscover size={32} />
        ) : brand === "amex" ? (
          <FaCcAmex size={32} />
        ) : (
          <FaRegCreditCard size={32} />
        )}
        <RxBorderDotted size={32} />
        <RxBorderDotted size={32} />
        <RxBorderDotted size={32} />
        <Text>{lastDigits}</Text>
      </Flex>
    </Container>
  );
};

export default React.memo(CardComponent);
