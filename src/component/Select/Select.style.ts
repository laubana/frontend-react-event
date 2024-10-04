import styled from "@emotion/styled";

import { fontSizes } from "../../theme/Size";
import { Size } from "../../type/Size";

export const Component = styled.div<{
  sizing: Size;
}>`
  align-items: center;
  display: flex;
  ${({ sizing }) => fontSizes[sizing]};
`;

export const Input = styled.input<{ sizing: Size }>`
  ${({ sizing }) => fontSizes[sizing]};

  :disabled {
    background-color: transparent;
  }
`;

export const Select = styled.select`
  bottom: 0;
  cursor: pointer;
  left: 0;
  opacity: 0;
  position: absolute;
  right: 0;
  top: 0;
`;

export const Wrapper = styled.div`
  position: relative;
`;
