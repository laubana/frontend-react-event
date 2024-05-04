import styled from "@emotion/styled";
import { Size } from "../Select/Select.props";

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

export const Container = styled.div``;

export const Select = styled.select<{ sizing: Size }>`
  ${({ sizing }) => sizes[sizing]};
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
