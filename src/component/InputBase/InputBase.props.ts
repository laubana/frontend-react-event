import { ReactNode } from "react";

import { Size } from "../../type/Size";

export interface InputBaseProps {
  children?: ReactNode;
  error?: string;
  label?: string;
  size?: Size;
}
