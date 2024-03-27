import { HTMLAttributes } from "react";

export type Sizing = "small" | "medium" | "large";

export interface InputTextAreaProps
  extends HTMLAttributes<HTMLTextAreaElement> {
  sizing?: Sizing;
  placeholder?: string;
  text?: string;
  setText: (text: string) => void;
}

export type InputTextAreaStyles = {
  sizing: Sizing;
};
