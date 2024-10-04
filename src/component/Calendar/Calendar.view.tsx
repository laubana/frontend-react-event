import "react-datepicker/dist/react-datepicker.css";

import React from "react";
import Calendar from "react-datepicker";

import { CalendarProps } from "./Calendar.props";
import { Container } from "./Calendar.style";

const InputDateComponent = (props: CalendarProps): JSX.Element => {
  const { dates, onSelect = () => null, setDates, style } = props;

  const handleChange = (dates: Date[] | null) => {
    if (dates) {
      setDates(dates);
    }
  };

  const handleSelect = (date: Date | null) => {
    if (date) {
      onSelect(date);
    }
  };

  return (
    <Container style={style}>
      <Calendar
        inline
        minDate={new Date()}
        onChange={handleChange}
        onSelect={handleSelect}
        selectsMultiple
        selectedDates={dates}
      />
    </Container>
  );
};

export default React.memo(InputDateComponent);
