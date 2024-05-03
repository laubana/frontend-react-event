export type Sizing = "small" | "medium" | "large";

export interface InputTextProps {
  placeholder?: string;
  password?: string;
  setPassword?: (text: string) => void;
  sizing?: Sizing;
}

export type InputTextStyles = {
  sizing: Sizing;
};
