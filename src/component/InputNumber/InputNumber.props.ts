export type Sizing = "small" | "medium" | "large";

export interface InputNumberProps {
  placeholder?: string;
  number?: number;
  setNumber?: (number: number) => void;
  sizing?: Sizing;
}

export type InputNumberStyles = {
  sizing: Sizing;
};
