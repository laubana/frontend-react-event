import styled from "@emotion/styled";

import { fontSizes, paddingSizes } from "../../theme/Size";
import { Color } from "../../type/Color";
import { Size } from "../../type/Size";

const colors: Record<Color, string> = {
  black: `
    background-color: black;
    border: 1px solid black;
    color: white;

    :hover {
      background-color: grey;
      border: 1px solid grey;
    }
  `,
  grey: `
    background-color: grey;
    border: 1px solid grey;
    color: white;

    :hover {
      background-color: darkgrey;
      border: 1px solid darkgrey;
    }
  `,
  lightgrey: `
    background-color: lightgrey;
    border: 1px solid lightgrey;
    color: white;

    :hover {
      background-color: grey;
      border: 1px solid grey;
    }
  `,
  red: `
    background-color: crimson;
    border: 1px solid crimson;
    color: white;

    :hover {
      background-color: tomato;
      border: 1px solid tomato;
    }
  `,
  transparent: `
    background-color: transparent;
    border: 1px solid transparent;
    color: black;
  `,
  white: `
    background-color: white;
    border: 1px solid white;
    color: black;

    :hover {
      background-color: white;
      border: 1px solid white;
      color: white;
    }
  `,
};

export const Button = styled.button<{
  sizing: Size;
  coloring: Color;
  block?: boolean;
  nopadding?: boolean;
}>`
  ${({ sizing }) => paddingSizes[sizing]};
  ${({ sizing }) => fontSizes[sizing]};
  ${({ coloring }) => colors[coloring]};
  ${({ block }) => block && "display: block; width: 100%;"}
  ${({ nopadding }) => nopadding && "padding: 0;"}
  border-radius: 8px;
  font-family: "Montserrat", sans-serif;
  white-space: nowrap;
`;

export const ChildrenContainer = styled.div`
  align-items: center;
  display: flex;
  gap: 8px;
  justify-content: center;
`;
