import styled from "@emotion/styled";

import { Color, TextStyle, Sizing } from "./Text.props";

const fontSizing: Record<Sizing, string> = {
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

const colors: Record<Color, string> = {
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

export const Text = styled.div<TextStyle>`
  font-family: "Montserrat", sans-serif;
  ${({ sizing }) => fontSizing[sizing]}
  ${({ color }) => colors[color]}
`;
