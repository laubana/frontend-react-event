import { CSSProperties, ReactNode } from "react";

export type Sizing = "small" | "medium" | "large";
export type Coloring = "black" | "white" | "red";
export type Alignment = "left" | "center" | "right";

export interface TextProps {
  alignment?: Alignment;
  children: ReactNode;
  coloring?: Coloring;
  sizing?: Sizing;
  style?: CSSProperties;
}
