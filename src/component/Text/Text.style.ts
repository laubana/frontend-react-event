import styled from "@emotion/styled";

import { Sizing, Coloring } from "./Text.props";

const fontSizes: Record<Sizing, string> = {
  small: `
        font-size: 14px;
    `,
  medium: `
        font-size: 16px;
    `,
  large: `
        font-size: 18px;
    `,
};

const colors: Record<Coloring, string> = {
  black: `
        color: black;
    `,
  white: `
        color: white;
    `,
  red: `
        color: red;
    `,
};

export const Text = styled.div<{
  sizing: Sizing;
  coloring: Coloring;
}>`
  font-family: "Montserrat", sans-serif;
  ${({ sizing }) => fontSizes[sizing]}
  ${({ coloring }) => colors[coloring]}
`;
