import { HTMLAttributes } from "react";

export type Size = "small" | "medium" | "large";
export type Color = "black" | "white" | "red" | "transparent";

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  _size?: Size;
  color?: Color;
  block?: boolean;
  nopadding?: boolean;
}

export type ButtonStyles = {
  _size: Size;
  color: Color;
  block?: boolean;
  nopadding?: boolean;
};
