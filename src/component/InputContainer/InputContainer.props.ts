import { CSSProperties, ReactNode } from "react";

import { Size } from "../../type/Size";

export interface InputContainerProps {
  children?: ReactNode;
  size?: Size;
  style?: CSSProperties;
}
