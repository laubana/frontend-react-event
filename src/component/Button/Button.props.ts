import { ReactNode } from "react";

export type Sizing = "small" | "medium" | "large";
export type Coloring = "black" | "white" | "red" | "transparent";

export interface ButtonProps {
  block?: boolean;
  nopadding?: boolean;
  onClick?: () => void;
  children: ReactNode | string;
  sizing?: Sizing;
  coloring?: Coloring;
}
