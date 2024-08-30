import React from "react";

import { LabelProps } from "./Label.props";
import { Container } from "./Label.style";

import Text from "../Text";

const LabelComponent = ({
  children,
  sizing = "medium",
}: LabelProps): JSX.Element => {
  return (
    <Container sizing={sizing}>
      <Text>{children}</Text>
    </Container>
  );
};

export default React.memo(LabelComponent);
