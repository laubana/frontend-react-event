import { Place } from "../../type/Place";

export type Sizing = "small" | "medium" | "large";

export interface InputPlaceProps {
  label?: string;
  placeholder?: string;
  address?: string;
  setPlace: (place: Place) => void;
  error?: string;
  sizing?: Sizing;
}
