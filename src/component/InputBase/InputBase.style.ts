import styled from "@emotion/styled";

import { paddingSizes } from "../../theme/Size";
import { Size } from "../../type/Size";

export const Container = styled.div`
  font-size: 0;
  width: 100%;
`;

export const ErrorContainer = styled.div<{ sizing: Size }>`
  ${({ sizing }) => paddingSizes[sizing]}
`;

export const LabelContainer = styled.div<{ sizing: Size }>`
  ${({ sizing }) => paddingSizes[sizing]}
`;
