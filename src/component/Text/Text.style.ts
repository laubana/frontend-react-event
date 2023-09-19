import styled from "@emotion/styled";

import { Type, Color, TextStyle } from "./Text.props";

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
  ${({ type }) => types[type]};
  ${({ color: color }) => colors[color]};
`;
