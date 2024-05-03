export type Sizing = "small" | "medium" | "large";

export interface InputTextProps {
  placeholder?: string;
  text?: string;
  setText?: (text: string) => void;
  error?: string;
  sizing?: Sizing;
}

export type InputTextStyles = {
  sizing: Sizing;
};
