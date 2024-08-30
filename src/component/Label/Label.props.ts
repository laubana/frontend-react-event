import { ReactNode } from "react";

export type Sizing = "small" | "medium" | "large";

export interface LabelProps {
  children: ReactNode;
  sizing?: Sizing;
}
