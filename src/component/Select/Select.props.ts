import { CSSProperties } from "react";
import { Option } from "../../type/Option";

export type Sizing = "small" | "medium" | "large";

export interface SelectProps {
  label?: string;
  defaultValue?: number;
  options: Option[];
  setOption: (option: Option) => void;
  sizing?: Sizing;
  style?: CSSProperties;
}

export type SelectStyle = {
  sizing: Sizing;
};
