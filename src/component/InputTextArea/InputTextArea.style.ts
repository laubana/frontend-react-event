import styled from "@emotion/styled";

import { InputTextAreaStyles, Sizing } from "./InputTextArea.props";

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

export const InputContainer = styled.div<InputTextAreaStyles>`
  ${({ sizing }) => fontSizing[sizing] + paddingSizing[sizing]}
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.25);
  border-radius: 8px;

  :focus-within {
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.25);
  }
`;

export const InputTextArea = styled.textarea`
  border: none;
  resize: none;

  :focus {
    outline: none;
  }
`;

export const ErrorContainer = styled.div<InputTextAreaStyles>`
  ${({ sizing }) => fontSizing[sizing] + paddingSizing[sizing]}
`;
