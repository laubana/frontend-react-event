import { CSSProperties, HTMLAttributes, ReactNode } from "react";

export interface ColumnsProps {
  columns: string;
  children: ReactNode;
  style?: CSSProperties;
}
