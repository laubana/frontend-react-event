import "react-datepicker/dist/react-datepicker.css";

import moment from "moment";
import React, { ChangeEvent, FocusEvent, useEffect, useState } from "react";
import Calendar from "react-datepicker";
import { CiCalendar } from "react-icons/ci";

import { InputDateProps } from "./InputDate.props";
import {
  Component,
  Container,
  ErrorContainer,
  InputContainer,
  InputDate,
  LabelContainer,
  ListContainer,
  Wrapper,
} from "./InputDate.style";

import Text from "../Text";

import { convertDate } from "../../helpers/date";

const InputDateComponent = (props: InputDateProps): JSX.Element => {
  const {
    date,
    error,
    label,
    placeholder,
    setDate,
    size = "medium",
    style,
  } = props;

  const [inputText, setInputText] = useState<string>(
    convertDate(date) || convertDate(new Date())
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

  const handleSelect = (date: Date) => {
    setInputText(convertDate(date));
    setDate(date);
    setIsVisible(false);
  };

  useEffect(() => {
    const regex = /^\d{4}-\d{2}-\d{2}$/;
    if (!inputText.match(regex)) {
      return;
    }

    const currentDate = new Date();
    currentDate.setHours(0);
    currentDate.setMinutes(0);
    currentDate.setSeconds(0);
    currentDate.setMilliseconds(0);

    if (
      moment([
        inputText.split("-")[0],
        inputText.split("-")[1],
        inputText.split("-")[2],
      ]).isValid() &&
      currentDate <= new Date(`${inputText}T00:00:00`)
    ) {
      setDate(new Date(`${inputText}T00:00:00`));
      setIsVisible(false);
    } else {
      setDate(undefined);
    }
  }, [inputText]);

  return (
    <Container style={style}>
      {label && (
        <LabelContainer sizing={size}>
          <Text>{label}</Text>
        </LabelContainer>
      )}
      <Wrapper onFocus={handleFocus} onBlur={handleBlur}>
        <InputContainer sizing={size}>
          <InputDate
            onChange={handleChange}
            placeholder={placeholder}
            sizing={size}
            tabIndex={0}
            value={inputText}
          />
          <Component tabIndex={1}>
            <CiCalendar color="grey" />
          </Component>
        </InputContainer>
        {isVisible && (
          <ListContainer>
            <Calendar
              inline
              selected={date}
              onChange={(date) => {
                if (date) {
                  handleSelect(date);
                }
              }}
              minDate={new Date()}
            />
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

export default React.memo(InputDateComponent);
