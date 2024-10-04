import { Option } from "../../type/Option";
import { Size } from "../../type/Size";

export interface AutoCompleteProps {
  error?: string;
  label?: string;
  option?: Option | null;
  options: Option[];
  placeholder?: string;
  setOption?: (option: Option | null) => void;
  size?: Size;
}
