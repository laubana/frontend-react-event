import styled from "@emotion/styled";

import { Type, Color, TextStyle, Sizing } from "./Text.props";

const types: Record<Type, string> = {
  h1: `
        font-size: 36px;
    `,
  h2: `
        font-size: 24px;
    `,
  paragraph: `
        font-size: 16px;
    `,
};

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
  ${({ type }) => types[type]}
  ${({ type, sizing }) => type === "paragraph" && fontSizing[sizing]}
  ${({ color }) => colors[color]}
`;
