import { CSSProperties } from "react";
import { Option } from "../../type/Option";

export type Size = "small" | "medium" | "large";

export interface SelectProps {
  label?: string;
  defaultValue?: number;
  options: Option[];
  setOption: (option: Option) => void;
  size?: Size;
  style?: CSSProperties;
}
