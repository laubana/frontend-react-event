import React, { ChangeEvent, FocusEvent, useState } from "react";
import { FaRegCircleXmark } from "react-icons/fa6";

import { InputTextProps } from "./InputText.props";
import { Component, Input } from "./InputText.style";

import InputBase from "../InputBase";
import InputContainer from "../InputContainer";

const InputTextComponent = ({
  error,
  label,
  placeholder,
  setText = () => null,
  size = "medium",
  text,
}: InputTextProps): JSX.Element => {
  const [isFocused, setIsFocused] = useState<boolean>(false);

  const handleBlur = (event: FocusEvent<HTMLDivElement>) => {
    if (!event.currentTarget.contains(event.relatedTarget)) {
      setIsFocused(false);
    }
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleReset = () => {
    setText("");
  };

  return (
    <InputBase error={error} label={label} size={size}>
      <div onFocus={handleFocus} onBlur={handleBlur}>
        <InputContainer size={size}>
          <Input
            tabIndex={0}
            type="text"
            placeholder={placeholder}
            value={text}
            onChange={handleChange}
            sizing={size}
          />
          {isFocused && (
            <Component onClick={handleReset} sizing={size} tabIndex={1}>
              <FaRegCircleXmark color="black" cursor="pointer" />
            </Component>
          )}
        </InputContainer>
      </div>
    </InputBase>
  );
};

export default React.memo(InputTextComponent);
