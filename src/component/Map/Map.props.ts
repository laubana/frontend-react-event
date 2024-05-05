import { ReactNode, RefObject } from "react";
import { Location } from "../../type/Location";
import { MapRef } from "react-map-gl";

export interface MapProps {
  ref?: RefObject<MapRef>;
  location: Location;
  markers?: Location[];
  popups?: ReactNode[];
}
