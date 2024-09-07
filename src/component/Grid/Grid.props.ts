import { ReactNode, CSSProperties } from "react";

export interface GridProps {
  children: ReactNode;
  columns?: number;
  style?: CSSProperties;
}
