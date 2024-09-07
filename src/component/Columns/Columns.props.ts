import { CSSProperties, ReactNode } from "react";

export interface ColumnsProps {
  children: ReactNode;
  columns: string;
  style?: CSSProperties;
}
