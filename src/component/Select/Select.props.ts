import { CSSProperties } from "react";

import { Option } from "../../type/Option";
import { Size } from "../../type/Size";

export interface SelectProps {
  defaultValue?: number;
  label?: string;
  options: Option[];
  setOption: (option: Option) => void;
  size?: Size;
  style?: CSSProperties;
}
