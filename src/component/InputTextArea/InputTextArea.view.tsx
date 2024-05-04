import React, { ChangeEvent } from "react";
import { InputTextAreaProps } from "./InputTextArea.props";
import {
  Container,
  LabelContainer,
  InputContainer,
  InputTextArea,
  ErrorContainer,
} from "./InputTextArea.style";
import Text from "../Text";

const InputTextComponent = ({
  label,
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
      {label && (
        <LabelContainer sizing={sizing}>
          <Text>{label}</Text>
        </LabelContainer>
      )}
      <InputContainer sizing={sizing}>
        <InputTextArea
          placeholder={placeholder}
          value={text}
          onChange={handleChange}
        />
      </InputContainer>
      {error && (
        <ErrorContainer sizing={sizing}>
          <Text coloring="red">{error}</Text>
        </ErrorContainer>
      )}
    </Container>
  );
};

export default React.memo(InputTextComponent);
