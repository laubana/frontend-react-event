import { HTMLAttributes } from "react";

export type Sizing = "small" | "medium" | "large";
export type Color = "black" | "white" | "red";

export interface TextProps extends HTMLAttributes<HTMLDivElement> {
  sizing?: Sizing;
  color?: Color;
}

export type TextStyle = {
  sizing: Sizing;
  color: Color;
};
