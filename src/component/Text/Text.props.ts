import { CSSProperties, ReactNode } from "react";

export type Sizing = "small" | "medium" | "large";
export type Coloring = "black" | "white" | "red";

export interface TextProps {
  sizing?: Sizing;
  coloring?: Coloring;
  children: ReactNode;
  style?: CSSProperties;
}
