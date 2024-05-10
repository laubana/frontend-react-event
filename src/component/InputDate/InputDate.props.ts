import { CSSProperties } from "react";

export type Sizing = "small" | "medium" | "large";

export interface DateFieldProps {
  label?: string;
  placeholder?: string;
  date?: Date;
  setDate: (date: Date) => void;
  error?: string;
  sizing?: Sizing;
  style?: CSSProperties;
}
