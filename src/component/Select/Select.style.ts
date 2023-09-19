import styled from "@emotion/styled";

import { SelectStyle } from "./Select.props";
import { Size } from "../Button/Button.props";

const sizes: Record<Size, string> = {
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

export const Select = styled.select<SelectStyle>`
  ${({ _size }) => sizes[_size]};
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  border: 1px solid lightgrey;
  border-radius: 8px;
  background-color: white;

  &:focus {
    outline: none;
  }
`;

export const Option = styled.option``;
