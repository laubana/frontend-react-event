import { InputHTMLAttributes } from "react";
import { Option } from "../../type/Option";

export type Sizing = "small" | "medium" | "large";

export interface AutoCompleteProps
  extends InputHTMLAttributes<HTMLInputElement> {
  sizing?: Sizing;
  options: Option[];
  option?: Option | undefined;
  setOption: (option: Option | undefined) => void;
}

export type InputTextStyles = {
  sizing: Sizing;
};
