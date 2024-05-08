import styled from "@emotion/styled";

import { Type, Color, TextProps } from "./Layout.props";

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

export const Header = styled.header`
  padding: 16px;
  max-width: 1140px;
  margin: auto;
`;

export const SearchContainer = styled.div`
  flex-grow: 1;
`;

export const Main = styled.main``;

export const Footer = styled.footer`
  padding: 64px 16px;
  text-align: center;
`;
