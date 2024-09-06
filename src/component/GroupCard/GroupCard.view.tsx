import React from "react";

import { GroupCardProps } from "./GroupCard.props";
import { Container, Image, TextContainer } from "./GroupCard.style";

import Text from "../Text";

const GroupCardComponent = ({ image, title }: GroupCardProps): JSX.Element => {
  return (
    <Container>
      <Image src={image} alt="card" />
      <TextContainer>
        <Text>{title}</Text>
      </TextContainer>
    </Container>
  );
};

export default React.memo(GroupCardComponent);
