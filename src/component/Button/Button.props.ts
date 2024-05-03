import { ReactNode } from "react";

export type Sizing = "small" | "medium" | "large";
export type Color = "black" | "white" | "red" | "transparent";

export interface ButtonProps {
  sizing?: Sizing;
  color?: Color;
  block?: boolean;
  nopadding?: boolean;
  onClick?: () => void;
  children: ReactNode | string;
}

export type ButtonStyles = {
  sizing: Sizing;
  color: Color;
  block?: boolean;
  nopadding?: boolean;
};
