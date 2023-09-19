import { HTMLAttributes } from "react";
import { Option } from "../../type/Option";

export type Size = "small" | "medium" | "large";

export interface SelectProps extends HTMLAttributes<HTMLSelectElement> {
  options: Option[];
  setOption: (option: Option) => void;
  label?: string;
  _size?: Size;
}

export type SelectStyle = {
  _size: Size;
};
