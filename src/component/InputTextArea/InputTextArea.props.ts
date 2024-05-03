export type Sizing = "small" | "medium" | "large";

export interface InputTextAreaProps {
  placeholder?: string;
  text: string;
  setText: (text: string) => void;
  error?: string;
  sizing?: Sizing;
}

export type InputTextAreaStyles = {
  sizing: Sizing;
};
