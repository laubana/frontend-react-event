import { ReactNode } from "react";

export type Sizing = "small" | "medium" | "large";
export type Coloring = "black" | "white" | "red" | "transparent";

export interface ButtonProps {
  block?: boolean;
  children: ReactNode | string;
  coloring?: Coloring;
  nopadding?: boolean;
  onClick?: () => void;
  sizing?: Sizing;
  type?: "button" | "submit";
}
