import styled from "@emotion/styled";

import { Sizing } from "./InputTextArea.props";

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
  ${({ sizing: sizing }) => paddingSizes[sizing]}
`;

export const InputContainer = styled.div<{ sizing: Sizing }>`
  border: 1px solid lightgrey;
  border-radius: 8px;
  ${({ sizing }) => paddingSizes[sizing]}

  :focus-within {
    border: 1px solid black;
  }
`;

export const InputTextArea = styled.textarea<{ sizing: Sizing }>`
  border: none;
  font-family: "Montserrat", sans-serif;
  ${({ sizing }) => fontSizes[sizing]};
  padding: 0;
  resize: none;
  width: 100%;

  :focus {
    outline: none;
  }
`;

export const ErrorContainer = styled.div<{ sizing: Sizing }>`
  ${({ sizing }) => paddingSizes[sizing]}
`;
