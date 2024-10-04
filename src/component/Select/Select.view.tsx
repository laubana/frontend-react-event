import React, { ChangeEvent, FocusEvent, useEffect, useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa6";

import { SelectProps } from "./Select.props";
import { Component, Input, Select, Wrapper } from "./Select.style";

import InputBase from "../InputBase";

import InputContainer from "../InputContainer";
import Text from "../Text";
import { Option } from "../../type/Option";

const SelectComponent = ({
  error,
  label,
  option,
  options,
  placeholder,
  setOption = () => null,
  size = "medium",
}: SelectProps): JSX.Element => {
  const [inputValue, setInputValue] = useState<string>(
    option ? option.label : placeholder ? placeholder : ""
  );
  const [isFocused, setIsFocused] = useState<boolean>(false);

  const handleBlur = (event: FocusEvent<HTMLDivElement>) => {
    if (!event.currentTarget.contains(event.relatedTarget)) {
      setIsFocused(false);
    }
  };

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setInputValue(event.target.value);
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  useEffect(() => {
    const option = options.find(
      (option) => option.label.toUpperCase() === inputValue.toUpperCase()
    );

    if (option) {
      setOption(option);
      setInputValue(option.label);
    } else {
      setOption(null);
    }
  }, [inputValue]);

  return (
    <InputBase error={error} label={label} size={size}>
      <Wrapper onFocus={handleFocus} onBlur={handleBlur}>
        <InputContainer size={size}>
          <Text
            color={placeholder === inputValue ? "grey" : "black"}
            size={size}
            style={{ width: "100%" }}
          >
            {inputValue}
          </Text>
          <Component sizing={size} tabIndex={1}>
            {isFocused ? (
              <FaChevronUp color="black" cursor="pointer" />
            ) : (
              <FaChevronDown color="lightgrey" cursor="pointer" />
            )}
          </Component>
        </InputContainer>
        <Select
          defaultValue={option ? option.value : placeholder ? "" : undefined}
          onChange={handleChange}
        >
          {placeholder ? (
            <option value="" disabled>
              {placeholder}
            </option>
          ) : null}
          {options.map((option, index) => (
            <option value={option.value} key={index}>
              {option.label}
            </option>
          ))}
        </Select>
      </Wrapper>
    </InputBase>
  );
};

export default React.memo(SelectComponent);
