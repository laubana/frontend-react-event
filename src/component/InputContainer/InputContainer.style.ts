import styled from "@emotion/styled";

import { paddingSizes } from "../../theme/Size";
import { Size } from "../../type/Size";

export const Container = styled.div<{ sizing: Size }>`
  align-items: center;
  background-color: white;
  border: 1px solid lightgrey;
  border-radius: 8px;
  display: flex;
  gap: 8px;
  ${({ sizing }) => paddingSizes[sizing]};

  :focus-within {
    border: 1px solid black;
  }
`;
