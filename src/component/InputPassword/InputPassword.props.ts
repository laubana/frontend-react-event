import { InputHTMLAttributes } from "react";

export type Sizing = "small" | "medium" | "large";

export interface InputTextProps extends InputHTMLAttributes<HTMLInputElement> {
  sizing?: Sizing;
  text: string;
  setText: (text: string) => void;
}

export type InputTextStyles = {
  sizing: Sizing;
};
