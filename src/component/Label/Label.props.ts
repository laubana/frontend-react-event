import { CSSProperties, ReactNode } from "react";

import { Color } from "../../type/Color";
import { Size } from "../../type/Size";

export interface LabelProps {
  children: ReactNode;
  color?: Color;
  size?: Size;
  style?: CSSProperties;
}
