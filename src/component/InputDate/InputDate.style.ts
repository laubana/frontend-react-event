import styled from "@emotion/styled";
import { Sizing } from "./InputDate.props";

const fontSizes: Record<Sizing, string> = {
  small: `
        font-size: 14px;
    `,
  medium: `
        font-size: 16px;
    `,
  large: `
        font-size: 18px;
    `,
};

const paddingSizes: Record<Sizing, string> = {
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
  position: relative;
  width: 100%;

  .react-datepicker__day {
    :hover {
      background-color: lightgrey;
    }
  }

  .react-datepicker__day.react-datepicker__day--selected {
    background-color: tomato;
  }
`;

export const LabelContainer = styled.div<{ sizing: Sizing }>`
  ${({ sizing }) => paddingSizes[sizing]}
`;

export const InputContainer = styled.div<{ sizing: Sizing }>`
  align-items: center;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.25);
  box-sizing: border-box;
  display: flex;
  gap: 8px;
  justify-content: space-between;
  ${({ sizing }) => paddingSizes[sizing]};

  :focus-within {
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  }
`;

export const InputDate = styled.button<{ sizing: Sizing }>`
  background-color: transparent;
  border: none;
  ${({ sizing }) => fontSizes[sizing]};
  text-align: left;
  width: 100%;

  :focus {
    outline: none;
  }
`;

export const Component = styled.button`
  align-items: center;
  background-color: white;
  border: 0;
  display: flex;
  margin: 0;
  padding: 0;
`;

export const ListContainer = styled.div`
  box-sizing: border-box;
  margin-top: 6px;
  position: absolute;
  width: 100%;
  z-index: 5;
`;

export const ErrorContainer = styled.div<{ sizing: Sizing }>`
  ${({ sizing }) => paddingSizes[sizing]}
`;
