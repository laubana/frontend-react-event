import styled from "@emotion/styled";

import { InputNumberStyles, Sizing } from "./InputNumber.props";

const fontSizing: Record<Sizing, string> = {
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

const paddingSizing: Record<Sizing, string> = {
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

export const Container = styled.div``;

export const LabelContainer = styled.div<InputNumberStyles>`
  ${({ sizing }) => fontSizing[sizing] + paddingSizing[sizing]}
`;

export const InputContainer = styled.div<InputNumberStyles>`
  ${({ sizing }) => fontSizing[sizing] + paddingSizing[sizing]}
  display: flex;
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  align-items: center;
  gap: 8px;

  :focus-within {
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.25);
  }
`;

export const InputNumber = styled.input`
  border: none;
  width: 100%;

  &:focus {
    outline: none;
  }
`;

export const Component = styled.button`
  display: flex;
  align-items: center;
  padding: 0;
  margin: 0;
  border: 0;
  background: none;
`;

export const ErrorContainer = styled.div<InputNumberStyles>`
  ${({ sizing }) => fontSizing[sizing] + paddingSizing[sizing]}
`;
