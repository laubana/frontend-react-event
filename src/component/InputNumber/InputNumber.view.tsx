import React, { ChangeEvent, FocusEvent, useState } from "react";
import { InputNumberProps } from "./InputNumber.props";
import {
  Container,
  LabelContainer,
  InputContainer,
  InputNumber,
  Component,
  ErrorContainer,
} from "./InputNumber.style";
import { FaRegCircleXmark } from "react-icons/fa6";
import Text from "../Text";

const InputNumberComponent = ({
  label,
  placeholder,
  number,
  setNumber = () => null,
  sizing = "medium",
}: InputNumberProps): JSX.Element => {
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>(
    number ? number.toString() : ""
  );
  const [error, setError] = useState<string>("");

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = (event: FocusEvent<HTMLDivElement>) => {
    if (!event.currentTarget.contains(event.relatedTarget)) {
      setIsFocused(false);
    }
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
    if (!isNaN(Number(event.target.value))) {
      setNumber(Number(event.target.value));
      setError("");
    } else {
      setNumber(0);
      setError("Error!");
    }
  };

  const handleReset = () => {
    setInputValue("");
    setNumber(0);
    setError("");
  };

  return (
    <Container>
      {label && (
        <LabelContainer sizing={sizing}>
          <Text>{label}</Text>
        </LabelContainer>
      )}
      <InputContainer onFocus={handleFocus} onBlur={handleBlur} sizing={sizing}>
        <InputNumber
          tabIndex={0}
          type="text"
          placeholder={placeholder}
          value={inputValue}
          onChange={handleChange}
          sizing={sizing}
        />
        {isFocused && (
          <Component tabIndex={1} onClick={handleReset}>
            <FaRegCircleXmark color="grey" />
          </Component>
        )}
      </InputContainer>
      {error && (
        <ErrorContainer sizing={sizing}>
          <Text color="red">{error}</Text>
        </ErrorContainer>
      )}
    </Container>
  );
};

export default React.memo(InputNumberComponent);
