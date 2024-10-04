import React from "react";

import { InputContainerProps } from "./InputContainer.props";
import { Container } from "./InputContainer.style";

const InputDateComponent = (props: InputContainerProps): JSX.Element => {
  const { children, size = "medium", style } = props;

  return (
    <Container sizing={size} style={style}>
      {children}
    </Container>
  );
};

export default React.memo(InputDateComponent);
