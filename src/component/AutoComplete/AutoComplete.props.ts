import { InputHTMLAttributes } from "react";
import { Option } from "../../type/Option";

export type Type = "h1" | "h2" | "paragraph";
export type Color = "black" | "white" | "red";

export interface AutoCompleteProps
  extends InputHTMLAttributes<HTMLInputElement> {
  options: Option[];
  option?: Option | undefined;
  setOption: (option: Option | undefined) => void;
}
