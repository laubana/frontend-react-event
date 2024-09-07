import { ReactNode } from "react";

import { Color } from "../../type/Color";
import { Size } from "../../type/Size";

export interface ButtonProps {
  block?: boolean;
  children: ReactNode | string;
  color?: Color;
  nopadding?: boolean;
  onClick?: () => void;
  size?: Size;
  type?: "button" | "submit";
}
