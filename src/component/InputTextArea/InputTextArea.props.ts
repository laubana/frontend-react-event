import { Size } from "../../type/Size";

export interface InputTextAreaProps {
  error?: string;
  label?: string;
  placeholder?: string;
  setText: (text: string) => void;
  sizing?: Size;
  text: string;
}
