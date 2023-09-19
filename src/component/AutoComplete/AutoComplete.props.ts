import { HTMLAttributes } from "react";
import { Place } from "../../type/Place";

export type Size = "small" | "medium" | "large";

export interface AutoCompleteProps extends HTMLAttributes<HTMLInputElement> {
  _size?: Size;
  address?: string;
  setPlace: (address: Place) => void;
}

export type AutoCompleteStyles = {
  _size: Size;
};
