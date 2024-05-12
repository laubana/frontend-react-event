import styled from "@emotion/styled";

import { Sizing } from "./InputPassword.props";

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
  width: 100%;
`;

export const LabelContainer = styled.div<{ sizing: Sizing }>`
  ${({ sizing }) => paddingSizes[sizing]}
`;

export const InputContainer = styled.div<{ sizing: Sizing }>`
  align-items: center;
  border-radius: 8px;
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.25);
  box-sizing: border-box;
  display: flex;
  gap: 8px;
  ${({ sizing }) => paddingSizes[sizing]}

  :focus-within {
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  }
`;

export const InputPassword = styled.input<{ sizing: Sizing }>`
  border: none;
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

export const ErrorContainer = styled.div<{ sizing: Sizing }>`
  ${({ sizing }) => paddingSizes[sizing]}
`;
