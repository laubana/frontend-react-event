import styled from "@emotion/styled";

import { Size, Color } from "./Button.props";

const paddingSizes: Record<Size, string> = {
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

const colors: Record<Color, string> = {
  black: `        
        background-color: black;
        color: white;
        &:hover {
          background-color: #424649;
        }
    `,
  white: `        
        background-color: white;
        color: black;
        &:hover {
          background-color: #424649;
          color: white;
        }
    `,
  red: `        
        background-color: #dc3545;
        color: white;
        &:hover {
          background-color: #bb2d3b;
        }
    `,
  transparent: `  
        background-color: transparent;
        color: black;
    `,
};

export const Button = styled.button<{
  size: Size;
  color: Color;
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
