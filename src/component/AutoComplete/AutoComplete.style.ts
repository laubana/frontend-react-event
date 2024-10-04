import styled from "@emotion/styled";

import { fontSizes, paddingSizes } from "../../theme/Size";
import { Size } from "../../type/Size";

export const Component = styled.div<{ sizing: Size }>`
  align-items: center;
  display: flex;
  ${({ sizing }) => fontSizes[sizing]};
`;

export const Input = styled.input<{ sizing: Size }>`
  ${({ sizing }) => fontSizes[sizing]};
`;

export const Item = styled.div<{ sizing: Size }>`
  cursor: pointer;
  ${({ sizing }) => paddingSizes[sizing]};
  width: 100%;

  :not(:last-child) {
    border-bottom: 1px solid lightgrey;
  }

  :hover {
    background-color: lightgrey;
  }
`;

export const ListContainer = styled.div`
  background-color: white;
  border: 1px solid black;
  border-radius: 8px;
  margin-top: 6px;
  max-height: 150px;
  overflow-y: auto;
  position: absolute;
  width: 100%;
  z-index: 5;
`;

export const Wrapper = styled.div`
  position: relative;
`;
