import styled from "@emotion/styled";

import { Sizing, Color, ButtonStyles } from "./Button.props";

const sizes: Record<Sizing, string> = {
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

export const Button = styled.button<ButtonStyles>`
  ${({ sizing }) => sizes[sizing]};
  ${({ color }) => colors[color]};
  ${({ block }) => block && "display: block; width: 100%;"}
  ${({ nopadding }) => nopadding && "padding: 0;"}
  border-radius: 8px;
  border: 0;
  white-space: nowrap;
`;

export const Children = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;
