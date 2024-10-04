import styled from "@emotion/styled";

import { Alignment } from "./Text.props";

import { fontSizes } from "../../theme/Size";
import { Color } from "../../type/Color";
import { Size } from "../../type/Size";

const colors: Record<Color, string> = {
  black: `
    color: black;
    `,
  grey: `
    color: grey;
  `,
  lightgrey: `
    color: lightgrey;
  `,
  red: `
    color: red;
  `,
  transparent: `
    color: black;
  `,
  white: `
    color: white;
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
  sizing: Size;
  coloring: Color;
  alignment: Alignment;
}>`
  font-family: "Montserrat", sans-serif;
  ${({ sizing }) => fontSizes[sizing]}
  ${({ coloring }) => colors[coloring]}
  ${({ alignment }) => alignments[alignment]}
`;
