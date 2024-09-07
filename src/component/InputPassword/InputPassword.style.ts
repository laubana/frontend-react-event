import styled from "@emotion/styled";

import { Size } from "../../type/Size";

const fontSizes: Record<Size, string> = {
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
  width: 100%;
`;

export const LabelContainer = styled.div<{ sizing: Size }>`
  ${({ sizing }) => paddingSizes[sizing]}
`;

export const InputContainer = styled.div<{ sizing: Size }>`
  align-items: center;
  border: 1px solid lightgrey;
  border-radius: 8px;
  display: flex;
  gap: 8px;
  ${({ sizing }) => paddingSizes[sizing]}

  :focus-within {
    border: 1px solid black;
  }
`;

export const InputPassword = styled.input<{ sizing: Size }>`
  border: none;
  font-family: "Montserrat", sans-serif;
  ${({ sizing }) => fontSizes[sizing]};
  width: 100%;

  :focus {
    outline: none;
  }
`;

export const Component = styled.div`
  align-items: center;
  background-color: white;
  display: flex;
`;

export const ErrorContainer = styled.div<{ sizing: Size }>`
  ${({ sizing }) => paddingSizes[sizing]}
`;
