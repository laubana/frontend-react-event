import React from "react";

import { EventCardProps } from "./EventCard.props";
import { Container, Image, TextContainer } from "./EventCard.style";

import Text from "../Text";

const EventCardComponent = ({ image, title }: EventCardProps): JSX.Element => {
  return (
    <Container>
      <Image src={image} alt="card" />
      <TextContainer>
        <Text>{title}</Text>
      </TextContainer>
    </Container>
  );
};

export default React.memo(EventCardComponent);
