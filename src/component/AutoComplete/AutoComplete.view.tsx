import React, { ChangeEvent, FocusEvent, useEffect, useState } from "react";
import { AutoCompleteProps } from "./AutoComplete.props";
import {
  Container,
  Icon,
  InputContainer,
  Input,
  ListContainer,
  Item,
} from "./AutoComplete.style";
import { FaChevronDown, FaChevronUp } from "react-icons/fa6";
import { Option } from "../../type/Option";
import Text from "../Text";

const AutoComplete = (props: AutoCompleteProps): JSX.Element => {
  const { placeholder, options, option, setOption, sizing = "medium" } = props;

  const [inputValue, setInputValue] = useState<string>(
    options.find((optionItem) => optionItem.value === option?.value)?.label ||
      ""
  );
  const [visibility, setVisibility] = useState<boolean>(false);

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
    setVisibility(true);
  };

  const handleBlur = (event: FocusEvent<HTMLDivElement>) => {
    if (!event.currentTarget.contains(event.relatedTarget)) {
      setVisibility(false);
    }
  };

  const handleSelect = (option: Option) => {
    setVisibility(false);
    setInputValue(option.label);
    setOption(option);
  };

  const handleToggle = () => {
    setVisibility((oldValue) => !oldValue);
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
      <InputContainer visibility={visibility} sizing={sizing}>
        <Input
          value={inputValue}
          placeholder={placeholder}
          onChange={handleChange}
        />
        <Icon onClick={handleToggle}>
          {visibility ? (
            <FaChevronUp color="grey" />
          ) : (
            <FaChevronDown color="grey" />
          )}
        </Icon>
      </InputContainer>
      {visibility && 0 < items.length && <ListContainer>{items}</ListContainer>}
    </Container>
  );
};

export default React.memo(AutoComplete);
