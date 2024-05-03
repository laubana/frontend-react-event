import React, { ChangeEvent } from "react";
import { InputTextProps } from "./InputText.props";
import {
  Container,
  InputContainer,
  InputText,
  ErrorContainer,
} from "./InputText.style";
import { FaRegCircleXmark } from "react-icons/fa6";
import Text from "../Text";

const InputTextComponent = ({
  placeholder,
  text,
  setText = () => null,
  error,
  sizing = "medium",
}: InputTextProps): JSX.Element => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  const handleReset = () => {
    setText("");
  };

  return (
    <Container>
      <InputContainer sizing={sizing}>
        <InputText
          type="text"
          placeholder={placeholder}
          value={text}
          onChange={handleChange}
        />
        <FaRegCircleXmark color="grey" cursor="pointer" onClick={handleReset} />
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
