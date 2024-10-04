import { Size } from "../../type/Size";

export interface InputDateProps {
  date?: Date | null;
  error?: string;
  label?: string;
  placeholder?: string;
  setDate?: (date: Date | null) => void;
  size?: Size;
}
