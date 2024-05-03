export type Sizing = "small" | "medium" | "large";

export interface InputTextProps {
  label?: string;
  placeholder?: string;
  text?: string;
  setText?: (text: string) => void;
  error?: string;
  sizing?: Sizing;
}

export type InputTextStyles = {
  sizing: Sizing;
};
