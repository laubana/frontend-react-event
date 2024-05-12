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
            tabIndex={0}
            type="type"
            placeholder={placeholder}
            value={password}
            onChange={handleChange}
            sizing={sizing}
          />
        ) : (
          <InputPassword
            tabIndex={0}
            type="password"
            placeholder={placeholder}
            value={password}
            onChange={handleChange}
            sizing={sizing}
          />
        )}
        {isFocused && (
          <Component tabIndex={1} onClick={handleReset}>
            <FaRegCircleXmark color="grey" />
          </Component>
        )}
        {visibility ? (
          <Component tabIndex={1} onClick={handleToggle}>
            <FaEye color="grey" />
          </Component>
        ) : (
          <Component tabIndex={1} onClick={handleToggle}>
            <FaEyeSlash color="grey" />
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
