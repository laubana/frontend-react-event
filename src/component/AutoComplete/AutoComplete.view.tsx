import React, { ChangeEvent, FocusEvent, useEffect, useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa6";

import { AutoCompleteProps } from "./AutoComplete.props";
import {
  Component,
  Input,
  Item,
  ListContainer,
  Wrapper,
} from "./AutoComplete.style";

import InputBase from "../InputBase";
import InputContainer from "../InputContainer";
import Text from "../Text";

import { Option } from "../../type/Option";

const AutoCompleteComponent = (props: AutoCompleteProps): JSX.Element => {
  const {
    error,
    label,
    option,
    options,
    placeholder,
    setOption = () => null,
    size = "medium",
  } = props;
  const [inputText, setInputText] = useState<string>(
    options.find((optionItem) => optionItem.value === option?.value)?.label ||
      ""
  );
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const handleBlur = (event: FocusEvent<HTMLDivElement>) => {
    if (!event.currentTarget.contains(event.relatedTarget)) {
      setIsVisible(false);
    }
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputText(event.target.value);
    setIsVisible(true);
  };

  const handleFocus = (event: FocusEvent<HTMLDivElement>) => {
    if (!event.currentTarget.contains(event.relatedTarget)) {
      setInputText("");
    }
    setIsVisible(true);
  };

  const handleSelect = (option: Option) => {
    setInputText(option.label);
    setIsVisible(false);
    setOption(option);
  };

  useEffect(() => {
    const option = options.find(
      (option) => option.label.toUpperCase() === inputText.toUpperCase()
    );

    if (option) {
      setOption(option);
      setInputText(option.label);
    } else {
      setOption(null);
    }
  }, [inputText]);

  return (
    <InputBase error={error} label={label} size={size}>
      <Wrapper onFocus={handleFocus} onBlur={handleBlur}>
        <InputContainer size={size}>
          <Input
            tabIndex={0}
            value={inputText}
            placeholder={placeholder}
            onChange={handleChange}
            sizing={size}
          />
          <Component sizing={size} tabIndex={1}>
            {isVisible ? (
              <FaChevronUp color="black" cursor="pointer" />
            ) : (
              <FaChevronDown color="lightgrey" cursor="pointer" />
            )}
          </Component>
        </InputContainer>
        {isVisible && 0 < options.length && (
          <ListContainer>
            {options
              .filter((option) =>
                option.label
                  .toUpperCase()
                  .includes(inputText?.toUpperCase() || "")
              )
              .map((option, index) => (
                <Item
                  tabIndex={2}
                  sizing={size}
                  onClick={() => handleSelect(option)}
                  key={index}
                >
                  <Text size={size}>{option.label}</Text>
                </Item>
              ))}
          </ListContainer>
        )}
      </Wrapper>
    </InputBase>
  );
};

export default React.memo(AutoCompleteComponent);
