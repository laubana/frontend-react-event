import styled from "@emotion/styled";

import { Sizing } from "./InputNumber.props";

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

export const Container = styled.div``;

export const LabelContainer = styled.div<{ sizing: Sizing }>`
  ${({ sizing }) => fontSizes[sizing] + paddingSizes[sizing]}
`;

export const InputContainer = styled.div<{ sizing: Sizing }>`
  ${({ sizing }) => fontSizes[sizing] + paddingSizes[sizing]}
  display: flex;
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  align-items: center;
  gap: 8px;

  :focus-within {
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
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

export const ErrorContainer = styled.div<{ sizing: Sizing }>`
  ${({ sizing }) => fontSizes[sizing] + paddingSizes[sizing]}
`;
