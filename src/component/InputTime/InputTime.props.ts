import { Size } from "../../type/Size";

export interface InputTimeProps {
  error?: string;
  label?: string;
  placeholder?: string;
  setTime?: (date: Date | null) => void;
  size?: Size;
  time?: Date | null;
}
