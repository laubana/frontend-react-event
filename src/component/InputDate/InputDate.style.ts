import styled from "@emotion/styled";

import { fontSizes } from "../../theme/Size";
import { Size } from "../../type/Size";

export const Component = styled.div<{ sizing: Size }>`
  align-items: center;
  display: flex;
  ${({ sizing }) => fontSizes[sizing]};
`;

export const Input = styled.input<{ sizing: Size }>`
  ${({ sizing }) => fontSizes[sizing]};
`;

export const ListContainer = styled.div`
  background-color: white;
  border: 1px solid black;
  border-radius: 8px;
  margin-top: 6px;
  position: absolute;
  z-index: 5;
`;

export const Wrapper = styled.div`
  .react-datepicker {
    background-color: transparent;
    border: none;
    font-family: "Montserrat", sans-serif;
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
