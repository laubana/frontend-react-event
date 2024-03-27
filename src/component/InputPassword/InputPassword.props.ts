import { HTMLAttributes } from "react";

export type Size = "small" | "medium" | "large";

export interface InputPasswordProps extends HTMLAttributes<HTMLInputElement> {
  _size?: Size;
  placeholder?: string;
  text?: string;
  setText: (text: string) => void;
}

export type InputPasswordStyles = {
  _size: Size;
};
