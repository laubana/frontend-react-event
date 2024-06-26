export type Sizing = "small" | "medium" | "large";

export interface InputNumberProps {
  label?: string;
  placeholder?: string;
  number?: number;
  setNumber?: (number: number) => void;
  sizing?: Sizing;
}
