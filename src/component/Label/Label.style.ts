import styled from "@emotion/styled";

import { Sizing } from "./Label.props";

const paddingSizes: Record<Sizing, string> = {
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
  sizing: Sizing;
}>`
  ${({ sizing }) => paddingSizes[sizing]}
`;
