import styled from "@emotion/styled";

export const Container = styled.div`
  font-size: 0;
  position: relative;
  width: 100%;

  .react-datepicker {
    background-color: transparent;
    border: none;
    font-family: "Montserrat", sans-serif;
    margin: -16px;
    padding: 16px;
  }

  .react-datepicker__navigation {
    top: 18px;
  }

  .react-datepicker__navigation--previous {
    left: 16px;
  }

  .react-datepicker__navigation--next {
    right: 16px;
  }

  .react-datepicker__header {
    border: none;
    background: none;
    padding: 0;
  }

  .react-datepicker__current-month {
    margin-top: 6px;
    margin-bottom: 6px;
  }

  .react-datepicker__day:hover:not(.react-datepicker__day--disabled) {
    border-radius: 50%;
  }

  .react-datepicker__day.react-datepicker__day--keyboard-selected,
  .react-datepicker__day.react-datepicker__day--selected {
    background-color: crimson;
    border-radius: 50%;
    color: white;
  }
`;
