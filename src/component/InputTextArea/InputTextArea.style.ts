import styled from "@emotion/styled";

import { InputTextAreaStyles, Sizing } from "./InputTextArea.props";

const sizes: Record<Sizing, string> = {
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

export const InputTextAreaContainer = styled.div<InputTextAreaStyles>`
  ${({ sizing }) => sizes[sizing]};
  display: flex;
  border: 1px solid lightgrey;
  border-radius: 8px;
  align-items: center;
  gap: 8px;
  flex-grow: 1;
`;

export const InputTextArea = styled.textarea`
  border: none;
  flex-grow: 1;

  &:focus {
    outline: none;
  }
`;
