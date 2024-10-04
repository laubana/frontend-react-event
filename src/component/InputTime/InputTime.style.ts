import styled from "@emotion/styled";

import { fontSizes } from "../../theme/Size";
import { Size } from "../../type/Size";

export const Component = styled.div<{
  sizing: Size;
}>`
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
    height: 100%;
    padding: 16px;
  }

  .react-datepicker__navigation {
    top: 18px;
  }

  .react-datepicker__header {
    border: none;
    background: none;
    margin-top: 6px;
    margin-bottom: 6px;
    padding: 0;
  }

  .react-datepicker__time-container
    .react-datepicker__time
    .react-datepicker__time-box
    ul.react-datepicker__time-list
    li.react-datepicker__time-list-item--selected {
    background-color: crimson;
  }
`;
