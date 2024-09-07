import { Option } from "../../type/Option";
import { Size } from "../../type/Size";

export interface AutoCompleteProps {
  error?: string;
  label?: string;
  option?: Option;
  options: Option[];
  placeholder?: string;
  setOption: (option: Option | undefined) => void;
  size?: Size;
}
