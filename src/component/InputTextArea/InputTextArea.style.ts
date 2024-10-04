import styled from "@emotion/styled";

import { fontSizes } from "../../theme/Size";
import { Size } from "../../type/Size";

export const TextArea = styled.textarea<{ sizing: Size }>`
  ${({ sizing }) => fontSizes[sizing]};
  resize: none;
`;
