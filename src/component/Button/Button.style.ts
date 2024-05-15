import styled from "@emotion/styled";

import { Sizing, Coloring } from "./Button.props";

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

const colors: Record<Coloring, string> = {
  black: `        
        background-color: black;
        color: white;
        &:hover {
          background-color: grey;
        }
    `,
  white: `        
        background-color: white;
        color: black;
        &:hover {
          background-color: white;
          color: white;
        }
    `,
  red: `        
        background-color: crimson;
        color: white;
        &:hover {
          background-color: tomato;
        }
    `,
  transparent: `  
        background-color: transparent;
        color: black;
    `,
};

export const Button = styled.button<{
  size: Sizing;
  color: Coloring;
  block?: boolean;
  nopadding?: boolean;
}>`
  ${({ size }) => paddingSizes[size]};
  ${({ color }) => colors[color]};
  ${({ block }) => block && "display: block; width: 100%;"}
  ${({ nopadding }) => nopadding && "padding: 0;"}
  border-radius: 8px;
  border: 0;
  white-space: nowrap;
`;

export const ChildrenContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;
