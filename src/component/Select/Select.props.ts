import { HTMLAttributes } from "react";
import { Option } from "../../type/Option";

export type Sizing = "small" | "medium" | "large";

export interface SelectProps extends HTMLAttributes<HTMLSelectElement> {
  options: Option[];
  setOption: (option: Option) => void;
  label?: string;
  sizing?: Sizing;
}

export type SelectStyle = {
  sizing: Sizing;
};
