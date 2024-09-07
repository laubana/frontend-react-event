import React from "react";

import { LabelProps } from "./Label.props";
import { Container } from "./Label.style";

import Text from "../Text";

const LabelComponent = ({
  children,
  color = "black",
  size = "medium",
}: LabelProps): JSX.Element => {
  return (
    <Container sizing={size}>
      <Text color={color}>{children}</Text>
    </Container>
  );
};

export default React.memo(LabelComponent);
