import { HTMLAttributes } from "react";

export type Sizing = "small" | "medium" | "large";
export type Color = "black" | "white" | "red" | "transparent";

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  sizing?: Sizing;
  color?: Color;
  block?: boolean;
  nopadding?: boolean;
}

export type ButtonStyles = {
  sizing: Sizing;
  color: Color;
  block?: boolean;
  nopadding?: boolean;
};
