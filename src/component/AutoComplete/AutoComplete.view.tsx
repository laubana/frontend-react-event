import React, { ChangeEvent, useState } from "react";
import { AutoCompleteProps } from "./AutoComplete.props";
import {
  Container,
  IconContainer,
  InputContainer,
  InputText,
  ItemContainer,
  ListContainer,
} from "./AutoComplete.style";
import { FaChevronDown, FaChevronUp } from "react-icons/fa6";
import { Option } from "../../type/Option";
import Text from "../Text";

const AutoComplete = (props: AutoCompleteProps): JSX.Element => {
  const {
    name,
    placeholder,
    option,
    options,
    setOption,
    onChange = () => null,
    sizing = "medium",
  } = props;

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
      <ItemContainer
        sizing={sizing}
        onClick={() => handleSelect(option)}
        key={index}
      >
        <Text sizing={sizing}>{option.label}</Text>
      </ItemContainer>
    ));

  const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
    setVisibility(true);
    setInputValue(event.target.value);
    if (
      options.find(
        (option) =>
          option.label.toUpperCase() === event.target.value.toUpperCase()
      )
    ) {
      setOption(
        options.find(
          (option) =>
            option.label.toUpperCase() === event.target.value.toUpperCase()
        )
      );
    } else {
      setOption(undefined);
    }
    onChange({
      target: {
        type: "text",
        value:
          options.find((option) => option.label === event.target.value)
            ?.value || "",
        name: name,
      },
    } as React.ChangeEvent<HTMLInputElement>);
  };

  const handleSelect = (option: Option) => {
    setVisibility(false);
    setInputValue(option.label);
    setOption(option);
    onChange({
      target: {
        type: "text",
        value: option.value,
        name: name,
      },
    } as React.ChangeEvent<HTMLInputElement>);
  };

  const handleToggle = () => {
    setVisibility((oldValue) => !oldValue);
  };

  return (
    <Container>
      <InputContainer visibility={visibility} sizing={sizing}>
        <InputText
          name={name}
          value={inputValue}
          placeholder={placeholder}
          onChange={handleInput}
          onFocus={handleInput}
        />
        <IconContainer onClick={handleToggle}>
          {visibility ? (
            <FaChevronUp color="grey" />
          ) : (
            <FaChevronDown color="grey" />
          )}
        </IconContainer>
      </InputContainer>
      {visibility && 0 < items.length && <ListContainer>{items}</ListContainer>}
    </Container>
  );
};

export default React.memo(AutoComplete);
