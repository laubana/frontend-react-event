import { HTMLAttributes } from "react";
import { Place } from "../../type/Place";

export type Sizing = "small" | "medium" | "large";

export interface PlaceProps extends HTMLAttributes<HTMLInputElement> {
  sizing?: Sizing;
  setPlace: (place: Place) => void;
}

export type PlaceStyles = {
  sizing: Sizing;
};
