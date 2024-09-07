import { CSSProperties } from "react";

import { Size } from "../../type/Size";

export interface InputTimeProps {
  error?: string;
  label?: string;
  placeholder?: string;
  setTime: (date: Date) => void;
  sizing?: Size;
  style?: CSSProperties;
  time?: Date;
}
