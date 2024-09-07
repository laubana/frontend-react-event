import styled from "@emotion/styled";

import { Size } from "../../type/Size";

const paddingSizes: Record<Size, string> = {
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

export const Container = styled.div<{
  sizing: Size;
}>`
  ${({ sizing }) => paddingSizes[sizing]}
`;
