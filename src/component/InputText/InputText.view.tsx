import React, { ChangeEvent, FocusEvent, useState } from "react";
import { FaRegCircleXmark } from "react-icons/fa6";

import { InputTextProps } from "./InputText.props";
import {
  Component,
  Container,
  ErrorContainer,
  InputContainer,
  InputText,
  LabelContainer,
} from "./InputText.style";

import Text from "../Text";

const InputTextComponent = ({
  error,
  label,
  placeholder,
  setText = () => null,
  size = "medium",
  text,
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
        <LabelContainer sizing={size}>
          <Text>{label}</Text>
        </LabelContainer>
      )}
      <InputContainer onFocus={handleFocus} onBlur={handleBlur} sizing={size}>
        <InputText
          tabIndex={0}
          type="text"
          placeholder={placeholder}
          value={text}
          onChange={handleChange}
          sizing={size}
        />
        {isFocused && (
          <Component tabIndex={1} onClick={handleReset}>
            <FaRegCircleXmark color="black" cursor="pointer" />
          </Component>
        )}
      </InputContainer>
      {error && (
        <ErrorContainer sizing={size}>
          <Text color="red">{error}</Text>
        </ErrorContainer>
      )}
    </Container>
  );
};

export default React.memo(InputTextComponent);
