import { Place } from "../../type/Place";

export type Sizing = "small" | "medium" | "large";

export interface PlaceProps {
  placeholder?: string;
  address?: string;
  setPlace: (place: Place) => void;
  sizing?: Sizing;
}

export type PlaceStyles = {
  sizing: Sizing;
};
