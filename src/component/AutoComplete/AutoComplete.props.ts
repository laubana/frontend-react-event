import { ChangeEvent } from "react";
import { Option } from "../../type/Option";

export type Sizing = "small" | "medium" | "large";

export interface AutoCompleteProps {
  sizing?: Sizing;
  name?: string;
  placeholder?: string;
  options: Option[];
  option?: Option;
  setOption: (option: Option | undefined) => void;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

export type AutoCompleteStyles = {
  sizing: Sizing;
};
