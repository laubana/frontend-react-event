import React, { ChangeEvent, FocusEvent, useState } from "react";
import { InputTextProps } from "./InputText.props";
import {
  Container,
  LabelContainer,
  InputContainer,
  InputText,
  Component,
  ErrorContainer,
} from "./InputText.style";
import { FaRegCircleXmark } from "react-icons/fa6";
import Text from "../Text";

const InputTextComponent = ({
  label,
  placeholder,
  text,
  setText = () => null,
  error,
  sizing = "medium",
}: InputTextProps): JSX.Element => {
  const [isFocused, setIsFocused] = useState<boolean>(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = (event: FocusEvent<HTMLDivElement>) => {
    if (!event.currentTarget.contains(event.relatedTarget)) {
      setIsFocused(false);
    }
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  const handleReset = () => {
    setText("");
  };

  return (
    <Container>
      {label && (
        <LabelContainer sizing={sizing}>
          <Text>{label}</Text>
        </LabelContainer>
      )}
      <InputContainer onFocus={handleFocus} onBlur={handleBlur} sizing={sizing}>
        <InputText
          type="text"
          placeholder={placeholder}
          value={text}
          onChange={handleChange}
        />
        {isFocused && (
          <Component onClick={handleReset}>
            <FaRegCircleXmark color="grey" />
          </Component>
        )}
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
