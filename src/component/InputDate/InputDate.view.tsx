import React, { FocusEvent, useEffect, useState } from "react";
import { CiCalendar } from "react-icons/ci";
import Calendar from "react-datepicker";
import { DateFieldProps } from "./InputDate.props";
import {
  Container,
  ErrorContainer,
  Component,
  InputDate,
  InputContainer,
  LabelContainer,
  ListContainer,
} from "./InputDate.style";
import Text from "../Text";

import "react-datepicker/dist/react-datepicker.css";

const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const convertDate = (date: Date) => {
  const MM = months[date.getMonth()];
  const dd = date.getDate();
  const yy = date.getFullYear();

  return `${yy}-${MM}-${10 <= dd ? dd : `0${dd}`}`;
};

const DateField = (props: DateFieldProps): JSX.Element => {
  const {
    label,
    placeholder,
    date,
    setDate,
    error,
    sizing = "medium",
    style,
  } = props;

  const [inputValue, setInputValue] = useState<string>("");
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const handleFocus = () => {
    setIsVisible(true);
  };

  const handleBlur = (event: FocusEvent<HTMLDivElement>) => {
    if (!event.currentTarget.contains(event.relatedTarget)) {
      // setIsVisible(false);
    }
  };

  useEffect(() => {
    if (date) {
      setInputValue(convertDate(date));
    }
  }, [date]);

  return (
    <Container onFocus={handleFocus} onBlur={handleBlur} style={style}>
      {label && (
        <LabelContainer sizing={sizing}>
          <Text>{label}</Text>
        </LabelContainer>
      )}
      <InputContainer sizing={sizing}>
        <InputDate sizing={sizing}>{inputValue || placeholder} </InputDate>
        <Component>
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
                setDate(date);
              }
            }}
            minDate={new Date()}
          />
        </ListContainer>
      )}
      {error && (
        <ErrorContainer sizing={sizing}>
          <Text coloring="red">{error}</Text>
        </ErrorContainer>
      )}
    </Container>
  );
};

export default React.memo(DateField);
