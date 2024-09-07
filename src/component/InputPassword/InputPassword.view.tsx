import React, { ChangeEvent, FocusEvent, useState } from "react";
import { FaEye, FaEyeSlash, FaRegCircleXmark } from "react-icons/fa6";

import { InputPasswordProps } from "./InputPassword.props";
import {
  Component,
  Container,
  ErrorContainer,
  InputContainer,
  InputPassword,
  LabelContainer,
} from "./InputPassword.style";

import Text from "../Text";

const InputPasswordComponent = ({
  error,
  label,
  password,
  placeholder,
  setPassword = () => null,
  size = "medium",
}: InputPasswordProps): JSX.Element => {
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
        <LabelContainer sizing={size}>
          <Text>{label}</Text>
        </LabelContainer>
      )}
      <InputContainer onFocus={handleFocus} onBlur={handleBlur} sizing={size}>
        {visibility ? (
          <InputPassword
            tabIndex={0}
            type="type"
            placeholder={placeholder}
            value={password}
            onChange={handleChange}
            sizing={size}
          />
        ) : (
          <InputPassword
            tabIndex={0}
            type="password"
            placeholder={placeholder}
            value={password}
            onChange={handleChange}
            sizing={size}
          />
        )}
        {isFocused && (
          <Component tabIndex={1} onClick={handleReset}>
            <FaRegCircleXmark color="black" cursor="pointer" />
          </Component>
        )}
        {visibility ? (
          <Component tabIndex={1} onClick={handleToggle}>
            <FaEye color={isFocused ? "black" : "lightgrey"} cursor="pointer" />
          </Component>
        ) : (
          <Component tabIndex={1} onClick={handleToggle}>
            <FaEyeSlash
              color={isFocused ? "black" : "lightgrey"}
              cursor="pointer"
            />
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

export default React.memo(InputPasswordComponent);
