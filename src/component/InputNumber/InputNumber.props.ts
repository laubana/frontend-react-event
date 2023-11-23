import { InputHTMLAttributes } from "react";

export type Sizing = "small" | "medium" | "large";

export interface InputNumberProps
  extends InputHTMLAttributes<HTMLInputElement> {
  sizing?: Sizing;
  number: string;
  setNumber: (number: string) => void;
}

export type InputNumberStyles = {
  sizing: Sizing;
};
