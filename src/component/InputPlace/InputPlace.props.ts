import { Place } from "../../type/Place";
import { Size } from "../../type/Size";

export interface InputPlaceProps {
  address?: string;
  error?: string;
  label?: string;
  placeholder?: string;
  setPlace?: (place: Place) => void;
  size?: Size;
}
