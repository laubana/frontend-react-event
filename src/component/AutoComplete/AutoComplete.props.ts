import { Option } from "../../type/Option";

export type Sizing = "small" | "medium" | "large";

export interface AutoCompleteProps {
  placeholder?: string;
  options: Option[];
  option?: Option;
  setOption: (option: Option | undefined) => void;
  sizing?: Sizing;
}
