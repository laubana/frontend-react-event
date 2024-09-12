import styled from "@emotion/styled";

import { Size } from "../../type/Size";

const fontSizes: Record<Size, string> = {
  small: `
    font-size: 12px;
  `,
  medium: `
    font-size: 16px;
  `,
  large: `
    font-size: 20px;
  `,
};

const paddingSizes: Record<Size, string> = {
  small: `
    padding: 4px 8px;
  `,
  medium: `
    padding: 6px 12px;
  `,
  large: `
    padding: 8px 16px;
  `,
};

export const Container = styled.div`
  font-size: 0;
  position: relative;
  width: 100%;

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

export const LabelContainer = styled.div<{ sizing: Size }>`
  ${({ sizing }) => paddingSizes[sizing]}
`;

export const Wrapper = styled.div``;

export const InputContainer = styled.div<{ sizing: Size }>`
  align-items: center;
  background-color: white;
  border: 1px solid lightgrey;
  border-radius: 8px;
  display: flex;
  gap: 8px;
  justify-content: space-between;
  ${({ sizing }) => paddingSizes[sizing]};

  :focus-within {
    border: 1px solid black;
  }
`;

export const InputDate = styled.input<{ sizing: Size }>`
  border: none;
  font-family: "Montserrat", sans-serif;
  ${({ sizing }) => fontSizes[sizing]};
  padding: 0;
  width: 100%;

  :focus {
    outline: none;
  }
`;

export const Component = styled.div`
  align-items: center;
  display: flex;
`;

export const ListContainer = styled.div`
  background-color: white;
  border: 1px solid black;
  border-radius: 8px;
  margin-top: 6px;
  position: absolute;
  z-index: 5;
`;

export const ErrorContainer = styled.div<{ sizing: Size }>`
  ${({ sizing }) => paddingSizes[sizing]}
`;