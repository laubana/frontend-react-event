import "react-datepicker/dist/react-datepicker.css";

import React, { ChangeEvent, FocusEvent, useEffect, useState } from "react";
import ReactDatePicker from "react-datepicker";
import { CiCalendar } from "react-icons/ci";

import { InputTimeProps } from "./InputTime.props";
import {
  Container,
  ErrorContainer,
  Component,
  InputDate,
  InputContainer,
  LabelContainer,
  ListContainer,
  Wrapper,
} from "./InputTime.style";

import Text from "../Text";
import { convertTime } from "../../helpers/date";

const InputTimeComponent = (props: InputTimeProps): JSX.Element => {
  const {
    time,
    error,
    label,
    placeholder,
    setTime,
    sizing = "medium",
    style,
  } = props;

  const [inputText, setInputText] = useState<string>(
    convertTime(time) || convertTime(new Date())
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

  const handleSelect = (time: Date) => {
    setInputText(convertTime(time));
    setTime(time);
    setIsVisible(false);
  };

  useEffect(() => {
    const regex = /^\d{2}:\d{2}$/;
    if (!inputText.match(regex)) {
      return;
    }

    const HH = inputText.split(":")[0];
    const mm = inputText.split(":")[1];

    if (0 <= +HH && +HH <= 23 && 0 <= +mm && +mm <= 55) {
      setTime(new Date(`1970-01-01T${HH}:${mm}:00`));
      setIsVisible(false);
    }
  }, [inputText]);

  return (
    <Container style={style}>
      {label && (
        <LabelContainer sizing={sizing}>
          <Text>{label}</Text>
        </LabelContainer>
      )}
      <Wrapper onFocus={handleFocus} onBlur={handleBlur}>
        <InputContainer sizing={sizing}>
          <InputDate
            onChange={handleChange}
            placeholder={placeholder}
            sizing={sizing}
            tabIndex={0}
            value={inputText}
          />
          <Component tabIndex={1}>
            <CiCalendar color="grey" />
          </Component>
        </InputContainer>
        {isVisible && (
          <ListContainer>
            <ReactDatePicker
              inline
              onChange={(time) => {
                if (time) {
                  handleSelect(time);
                }
              }}
              selected={time}
              showTimeSelect
              showTimeSelectOnly
              timeFormat="HH:mm"
              timeIntervals={5}
            />
          </ListContainer>
        )}
      </Wrapper>
      {error && (
        <ErrorContainer sizing={sizing}>
          <Text color="red">{error}</Text>
        </ErrorContainer>
      )}
    </Container>
  );
};

export default React.memo(InputTimeComponent);
