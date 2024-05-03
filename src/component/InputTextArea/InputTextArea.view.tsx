import React, { ChangeEvent } from "react";
import { InputTextAreaProps } from "./InputTextArea.props";
import {
  Container,
  InputContainer,
  InputTextArea,
  ErrorContainer,
} from "./InputTextArea.style";
import Text from "../Text";

const InputTextComponent = ({
  placeholder,
  text,
  setText,
  error,
  sizing = "medium",
}: InputTextAreaProps): JSX.Element => {
  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value);
  };

  return (
    <Container>
      <InputContainer sizing={sizing}>
        <InputTextArea
          placeholder={placeholder}
          value={text}
          onChange={handleChange}
        />
      </InputContainer>
      {error && (
        <ErrorContainer sizing={sizing}>
          <Text color="red">{error}</Text>
        </ErrorContainer>
      )}
    </Container>
  );
};

export default React.memo(InputTextComponent);
