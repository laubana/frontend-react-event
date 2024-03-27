import { HTMLAttributes } from "react";

export type Type = "h1" | "h2" | "paragraph";
export type Sizing = "small" | "medium" | "large";
export type Color = "black" | "white" | "red";

export interface TextProps extends HTMLAttributes<HTMLDivElement> {
  type?: Type;
  sizing?: Sizing;
  color?: Color;
}

export type TextStyle = {
  type: Type;
  sizing: Sizing;
  color: Color;
};
