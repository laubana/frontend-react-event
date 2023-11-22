import { HTMLAttributes } from "react";

export type Sizing = "small" | "medium" | "large";

export interface InputTextProps extends HTMLAttributes<HTMLInputElement> {
  sizing?: Sizing;
  placeholder?: string;
  text: string;
  setText: (text: string) => void;
}

export type InputTextStyles = {
  sizing: Sizing;
};
