import React, { ChangeEvent, FocusEvent, useEffect, useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa6";
import { AutoCompleteProps } from "./AutoComplete.props";
import {
  Container,
  LabelContainer,
  InputContainer,
  Input,
  Icon,
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
      <Item sizing={sizing} onClick={() => handleSelect(option)} key={index}>
        <Text sizing={sizing}>{option.label}</Text>
      </Item>
    ));

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
    handleFocus();
  };

  const handleFocus = () => {
    setIsVisible(true);
  };

  const handleBlur = (event: FocusEvent<HTMLDivElement>) => {
    if (!event.currentTarget.contains(event.relatedTarget)) {
      setIsVisible(false);
    }
  };

  const handleSelect = (option: Option) => {
    setIsVisible(false);
    setInputValue(option.label);
    setOption(option);
  };

  const handleToggle = () => {
    setIsVisible((oldValue) => !oldValue);
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
    <Container onFocus={handleFocus} onBlur={handleBlur}>
      {label && (
        <LabelContainer sizing={sizing}>
          <Text>{label}</Text>
        </LabelContainer>
      )}
      <InputContainer isVisible={isVisible} sizing={sizing}>
        <Input
          value={inputValue}
          placeholder={placeholder}
          onChange={handleChange}
        />
        <Icon onClick={handleToggle}>
          {isVisible ? (
            <FaChevronUp color="black" />
          ) : (
            <FaChevronDown color="black" />
          )}
        </Icon>
      </InputContainer>
      {isVisible && 0 < items.length && <ListContainer>{items}</ListContainer>}
      {error && (
        <ErrorContainer sizing={sizing}>
          <Text coloring="red">{error}</Text>
        </ErrorContainer>
      )}
    </Container>
  );
};

export default React.memo(AutoComplete);
