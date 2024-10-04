import React from "react";

import { InputBaseProps } from "./InputBase.props";
import { Container, ErrorContainer, LabelContainer } from "./InputBase.style";

import Text from "../Text";

const InputDateComponent = (props: InputBaseProps): JSX.Element => {
  const { children, error, label, size = "medium" } = props;

  return (
    <Container>
      {label && (
        <LabelContainer sizing={size}>
          <Text size={size}>{label}</Text>
        </LabelContainer>
      )}
      {children}
      {error && (
        <ErrorContainer sizing={size}>
          <Text color="red" size={size}>
            {error}
          </Text>
        </ErrorContainer>
      )}
    </Container>
  );
};

export default React.memo(InputDateComponent);
