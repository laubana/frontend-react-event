import styled from "@emotion/styled";

import { InputTextStyles, Sizing } from "./InputText.props";

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

export const InputTextContainer = styled.div<InputTextStyles>`
  ${({ sizing }) => sizes[sizing]};
  display: flex;
  border: 1px solid lightgrey;
  border-radius: 8px;
  align-items: center;
  gap: 8px;
  flex-grow: 1;
`;

export const InputText = styled.input`
  border: none;
  flex-grow: 1;

  &:focus {
    outline: none;
  }
`;
