import { ForwardedRef, ReactNode } from "react";
import { Location } from "../../type/Location";
import { MapRef } from "react-map-gl";

export interface MapProps {
  forwardedRef?: ForwardedRef<MapRef>;
  location?: Location;
  markers?: Location[];
  popups?: ReactNode[];
}
