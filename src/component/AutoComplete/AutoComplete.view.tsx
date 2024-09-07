import React, { ChangeEvent, FocusEvent, useEffect, useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa6";

import { AutoCompleteProps } from "./AutoComplete.props";
import {
  Component,
  Container,
  ErrorContainer,
  Input,
  InputContainer,
  Item,
  LabelContainer,
  ListContainer,
  Wrapper,
} from "./AutoComplete.style";

import Text from "../Text";

import { Option } from "../../type/Option";

const AutoCompleteComponent = (props: AutoCompleteProps): JSX.Element => {
  const {
    error,
    label,
    option,
    options,
    placeholder,
    setOption,
    size = "medium",
  } = props;

  const [inputValue, setInputValue] = useState<string>(
    options.find((optionItem) => optionItem.value === option?.value)?.label ||
      ""
  );
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
    setIsVisible(true);
  };

  const handleFocus = (event: FocusEvent<HTMLDivElement>) => {
    if (!event.currentTarget.contains(event.relatedTarget)) {
      setInputValue("");
    }
    setIsVisible(true);
  };

  const handleBlur = (event: FocusEvent<HTMLDivElement>) => {
    if (!event.currentTarget.contains(event.relatedTarget)) {
      setIsVisible(false);
    }
  };

  const handleSelect = (option: Option) => {
    setInputValue(option.label);
    setIsVisible(false);
    setOption(option);
  };

  useEffect(() => {
    const option = options.find(
      (option) => option.label.toUpperCase() === inputValue.toUpperCase()
    );

    if (option) {
      setOption(option);
      setInputValue(option.label);
    } else {
      setOption(undefined);
    }
  }, [inputValue]);

  return (
    <Container>
      {label && (
        <LabelContainer sizing={size}>
          <Text>{label}</Text>
        </LabelContainer>
      )}
      <Wrapper onFocus={handleFocus} onBlur={handleBlur}>
        <InputContainer sizing={size}>
          <Input
            tabIndex={0}
            value={inputValue}
            placeholder={placeholder}
            onChange={handleChange}
            sizing={size}
          />
          <Component tabIndex={1}>
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
                  .includes(inputValue?.toUpperCase() || "")
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
      {error && (
        <ErrorContainer sizing={size}>
          <Text color="red">{error}</Text>
        </ErrorContainer>
      )}
    </Container>
  );
};

export default React.memo(AutoCompleteComponent);
