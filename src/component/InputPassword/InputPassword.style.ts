import styled from "@emotion/styled";

import { fontSizes } from "../../theme/Size";
import { Size } from "../../type/Size";

export const Component = styled.div<{ sizing: Size }>`
  align-items: center;
  display: flex;
  ${({ sizing }) => fontSizes[sizing]};
`;

export const Input = styled.input<{ sizing: Size }>`
  ${({ sizing }) => fontSizes[sizing]};
`;
