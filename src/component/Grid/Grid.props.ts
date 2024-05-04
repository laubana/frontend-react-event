import { ReactNode, CSSProperties } from "react";

export interface GridProps {
  columns?: number;
  children: ReactNode;
  style?: CSSProperties;
}
