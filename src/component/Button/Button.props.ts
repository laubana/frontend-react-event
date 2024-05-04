import { ReactNode } from "react";

export type Size = "small" | "medium" | "large";
export type Color = "black" | "white" | "red" | "transparent";

export interface ButtonProps {
  size?: Size;
  color?: Color;
  block?: boolean;
  nopadding?: boolean;
  onClick?: () => void;
  children: ReactNode | string;
}
