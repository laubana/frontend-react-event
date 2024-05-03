export type Sizing = "small" | "medium" | "large";

export interface InputTextProps {
  label?: string;
  placeholder?: string;
  password?: string;
  setPassword?: (text: string) => void;
  error?: string;
  sizing?: Sizing;
}

export type InputPasswordStyles = {
  sizing: Sizing;
};
