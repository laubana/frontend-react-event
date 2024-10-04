import "react-datepicker/dist/react-datepicker.css";

import React, { ChangeEvent, FocusEvent, useEffect, useState } from "react";
import ReactDatePicker from "react-datepicker";
import { CiCalendar } from "react-icons/ci";

import { InputTimeProps } from "./InputTime.props";
import { Component, Input, ListContainer, Wrapper } from "./InputTime.style";

import InputBase from "../InputBase";
import InputContainer from "../InputContainer";

import { convertTime } from "../../helpers/date";

const InputTimeComponent = (props: InputTimeProps): JSX.Element => {
  const {
    error,
    label,
    placeholder,
    setTime = () => null,
    size = "medium",
    time,
  } = props;
  const [inputText, setInputText] = useState<string>(
    convertTime(time ?? null) || convertTime(new Date())
  );
  const [isFocused, setIsFocused] = useState<boolean>(false);

  const handleBlur = (event: FocusEvent<HTMLDivElement>) => {
    if (!event.currentTarget.contains(event.relatedTarget)) {
      setIsFocused(false);
    }
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputText(event.target.value);
    setIsFocused(true);
  };

  const handleFocus = (event: FocusEvent<HTMLDivElement>) => {
    if (!event.currentTarget.contains(event.relatedTarget)) {
      setInputText("");
      setIsFocused(true);
    }
  };

  const handleSelect = (time: Date) => {
    setInputText(convertTime(time));
    setTime(time);
    setIsFocused(false);
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
      setIsFocused(false);
    }
  }, [inputText]);

  return (
    <InputBase error={error} label={label} size={size}>
      <Wrapper onFocus={handleFocus} onBlur={handleBlur}>
        <InputContainer size={size}>
          <Input
            onChange={handleChange}
            placeholder={placeholder}
            sizing={size}
            tabIndex={0}
            value={inputText}
          />
          <Component sizing={size} tabIndex={1}>
            <CiCalendar color={isFocused ? "black" : "lightgrey"} />
          </Component>
        </InputContainer>
        {isFocused && (
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
    </InputBase>
  );
};

export default React.memo(InputTimeComponent);
