import { Option } from "../../type/Option";

export type Sizing = "small" | "medium" | "large";

export interface AutoCompleteProps {
  label?: string;
  placeholder?: string;
  options: Option[];
  option?: Option;
  setOption: (option: Option | undefined) => void;
  error?: string;
  sizing?: Sizing;
}
