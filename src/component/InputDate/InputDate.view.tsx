import "react-datepicker/dist/react-datepicker.css";

import moment from "moment";
import React, { ChangeEvent, FocusEvent, useEffect, useState } from "react";
import Calendar from "react-datepicker";
import { CiCalendar } from "react-icons/ci";

import { InputDateProps } from "./InputDate.props";
import { Component, Input, ListContainer, Wrapper } from "./InputDate.style";

import InputBase from "../InputBase";
import InputContainer from "../InputContainer";

import { convertDate } from "../../helpers/date";

const InputDateComponent = (props: InputDateProps): JSX.Element => {
  const {
    date,
    error,
    label,
    placeholder,
    setDate = () => null,
    size = "medium",
  } = props;
  const [inputValue, setInputValue] = useState<string>(
    convertDate(date ?? null) || convertDate(new Date())
  );
  const [isFocused, setIsFocused] = useState<boolean>(false);

  const handleBlur = (event: FocusEvent<HTMLDivElement>) => {
    if (!event.currentTarget.contains(event.relatedTarget)) {
      setIsFocused(false);
    }
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleFocus = (event: FocusEvent<HTMLDivElement>) => {
    if (!event.currentTarget.contains(event.relatedTarget)) {
      setInputValue("");
      setIsFocused(true);
    }
  };

  const handleSelect = (date: Date) => {
    setInputValue(convertDate(date));
    setDate(date);
  };

  useEffect(() => {
    const regex = /^\d{4}-\d{2}-\d{2}$/;
    if (!inputValue.match(regex)) {
      return;
    }

    const currentDate = new Date();
    currentDate.setHours(0);
    currentDate.setMinutes(0);
    currentDate.setSeconds(0);
    currentDate.setMilliseconds(0);

    if (
      moment([
        inputValue.split("-")[0],
        inputValue.split("-")[1],
        inputValue.split("-")[2],
      ]).isValid() &&
      currentDate <= new Date(`${inputValue}T00:00:00`)
    ) {
      setDate(new Date(`${inputValue}T00:00:00`));
      setIsFocused(false);
    } else {
      setDate(null);
    }
  }, [inputValue]);

  return (
    <InputBase error={error} label={label} size={size}>
      <Wrapper onFocus={handleFocus} onBlur={handleBlur}>
        <InputContainer size={size}>
          <Input
            onChange={handleChange}
            placeholder={placeholder}
            sizing={size}
            tabIndex={0}
            value={inputValue}
          />
          <Component sizing={size} tabIndex={1}>
            <CiCalendar color={isFocused ? "black" : "lightgrey"} />
          </Component>
        </InputContainer>
        {isFocused && (
          <ListContainer>
            <Calendar
              inline
              minDate={new Date()}
              onChange={(date) => {
                if (date) {
                  handleSelect(date);
                }
              }}
              selected={date}
            />
          </ListContainer>
        )}
      </Wrapper>
    </InputBase>
  );
};

export default React.memo(InputDateComponent);
