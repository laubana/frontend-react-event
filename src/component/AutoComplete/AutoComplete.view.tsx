import React, { ChangeEvent, FocusEvent, useEffect, useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa6";
import { AutoCompleteProps } from "./AutoComplete.props";
import {
  Container,
  LabelContainer,
  Wrapper,
  InputContainer,
  Input,
  Component,
  ListContainer,
  Item,
  ErrorContainer,
} from "./AutoComplete.style";
import { Option } from "../../type/Option";
import Text from "../Text";

const AutoComplete = (props: AutoCompleteProps): JSX.Element => {
  const {
    label,
    placeholder,
    options,
    option,
    setOption,
    error,
    sizing = "medium",
  } = props;

  const [inputValue, setInputValue] = useState<string>(
    options.find((optionItem) => optionItem.value === option?.value)?.label ||
      ""
  );
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const items = options
    .filter((option) =>
      option.label.toUpperCase().includes(inputValue?.toUpperCase() || "")
    )
    .map((option, index) => (
      <Item
        tabIndex={2}
        sizing={sizing}
        onClick={() => handleSelect(option)}
        key={index}
      >
        <Text sizing={sizing}>{option.label}</Text>
      </Item>
    ));

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
        <LabelContainer sizing={sizing}>
          <Text>{label}</Text>
        </LabelContainer>
      )}
      <Wrapper onFocus={handleFocus} onBlur={handleBlur}>
        <InputContainer sizing={sizing}>
          <Input
            tabIndex={0}
            value={inputValue}
            placeholder={placeholder}
            onChange={handleChange}
            sizing={sizing}
          />
          <Component tabIndex={1}>
            {isVisible ? (
              <FaChevronUp color="grey" />
            ) : (
              <FaChevronDown color="grey" />
            )}
          </Component>
        </InputContainer>
        {isVisible && 0 < items.length && (
          <ListContainer>{items}</ListContainer>
        )}
      </Wrapper>
      {error && (
        <ErrorContainer sizing={sizing}>
          <Text coloring="red">{error}</Text>
        </ErrorContainer>
      )}
    </Container>
  );
};

export default React.memo(AutoComplete);
