import { CSSProperties } from "react";

import { Size } from "../../type/Size";

export interface InputDateProps {
  date?: Date;
  error?: string;
  label?: string;
  placeholder?: string;
  setDate: (date?: Date) => void;
  size?: Size;
  style?: CSSProperties;
}
