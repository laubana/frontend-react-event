import React, { ChangeEvent, FocusEvent, useState } from "react";
import { FaEye, FaEyeSlash, FaRegCircleXmark } from "react-icons/fa6";

import { InputPasswordProps } from "./InputPassword.props";
import { Component, Input } from "./InputPassword.style";

import InputBase from "../InputBase";
import InputContainer from "../InputContainer";

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

  const handleBlur = (event: FocusEvent<HTMLDivElement>) => {
    if (!event.currentTarget.contains(event.relatedTarget)) {
      setIsFocused(false);
    }
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleReset = () => {
    setPassword("");
  };

  const handleToggle = () => {
    setVisibility((oldValue) => !oldValue);
  };

  return (
    <InputBase error={error} label={label} size={size}>
      <div onFocus={handleFocus} onBlur={handleBlur}>
        <InputContainer size={size}>
          {visibility ? (
            <Input
              tabIndex={0}
              type="type"
              placeholder={placeholder}
              value={password}
              onChange={handleChange}
              sizing={size}
            />
          ) : (
            <Input
              tabIndex={0}
              type="password"
              placeholder={placeholder}
              value={password}
              onChange={handleChange}
              sizing={size}
            />
          )}
          {isFocused && (
            <Component onClick={handleReset} sizing={size} tabIndex={1}>
              <FaRegCircleXmark color="black" cursor="pointer" />
            </Component>
          )}
          {visibility ? (
            <Component onClick={handleToggle} sizing={size} tabIndex={1}>
              <FaEye
                color={isFocused ? "black" : "lightgrey"}
                cursor="pointer"
              />
            </Component>
          ) : (
            <Component onClick={handleToggle} sizing={size} tabIndex={1}>
              <FaEyeSlash
                color={isFocused ? "black" : "lightgrey"}
                cursor="pointer"
              />
            </Component>
          )}
        </InputContainer>
      </div>
    </InputBase>
  );
};

export default React.memo(InputPasswordComponent);
