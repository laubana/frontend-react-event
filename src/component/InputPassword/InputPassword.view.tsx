import React, { ChangeEvent, FocusEvent, useState } from "react";
import { InputTextProps } from "./InputPassword.props";
import {
  Container,
  LabelContainer,
  InputContainer,
  InputPassword,
  Component,
  ErrorContainer,
} from "./InputPassword.style";
import { FaEye, FaEyeSlash, FaRegCircleXmark } from "react-icons/fa6";
import Text from "../Text";

const InputPasswordComponent = ({
  label,
  placeholder,
  password,
  setPassword = () => null,
  error,
  sizing = "medium",
}: InputTextProps): JSX.Element => {
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [visibility, setVisibility] = useState<boolean>(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = (event: FocusEvent<HTMLDivElement>) => {
    if (!event.currentTarget.contains(event.relatedTarget)) {
      setIsFocused(false);
    }
  };

  const handleToggle = () => {
    setVisibility((oldValue) => !oldValue);
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleReset = () => {
    setPassword("");
  };

  return (
    <Container>
      {label && (
        <LabelContainer sizing={sizing}>
          <Text>{label}</Text>
        </LabelContainer>
      )}
      <InputContainer onFocus={handleFocus} onBlur={handleBlur} sizing={sizing}>
        {visibility ? (
          <InputPassword
            type="type"
            placeholder={placeholder}
            value={password}
            onChange={handleChange}
            sizing={sizing}
          />
        ) : (
          <InputPassword
            type="password"
            placeholder={placeholder}
            value={password}
            onChange={handleChange}
            sizing={sizing}
          />
        )}
        {isFocused && (
          <Component onClick={handleReset}>
            <FaRegCircleXmark color="grey" />
          </Component>
        )}
        {visibility ? (
          <Component onClick={handleToggle}>
            <FaEye color="grey" cursor="pointer" />
          </Component>
        ) : (
          <Component onClick={handleToggle}>
            <FaEyeSlash color="grey" cursor="pointer" />
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

export default React.memo(InputPasswordComponent);
