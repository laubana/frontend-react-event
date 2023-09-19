import React from "react";
import { CardProps } from "./Card.props";
import { Container, Image, TextContainer } from "./Card.style";
import Text from "../Text";

const FlexComponent = ({ image, title }: CardProps): JSX.Element => {
  return (
    <Container>
      <Image src={image} alt="card" />
      <TextContainer>
        <Text>{title}</Text>
      </TextContainer>
    </Container>
  );
};

export default React.memo(FlexComponent);
