import { CSSProperties, ReactNode } from "react";

import { Color } from "../../type/Color";
import { Size } from "../../type/Size";

export type Alignment = "left" | "center" | "right";

export interface TextProps {
  alignment?: Alignment;
  children: ReactNode;
  color?: Color;
  size?: Size;
  style?: CSSProperties;
}
