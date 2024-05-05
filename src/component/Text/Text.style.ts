import styled from "@emotion/styled";

import { Sizing, Coloring, Alignment } from "./Text.props";

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

const alignments: Record<Alignment, string> = {
  left: `
        text-align: left;
    `,
  center: `
        text-align: center;
    `,
  right: `
        text-align: right;
    `,
};

export const Text = styled.div<{
  sizing: Sizing;
  coloring: Coloring;
  alignment: Alignment;
}>`
  font-family: "Montserrat", sans-serif;
  ${({ sizing }) => fontSizes[sizing]}
  ${({ coloring }) => colors[coloring]}
  ${({ alignment }) => alignments[alignment]}
`;
