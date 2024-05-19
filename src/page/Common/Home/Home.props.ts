import { Event } from "../../../type/Event";
import { MapRef } from "react-map-gl";
import { Place } from "../../../type/Place";
import { Option } from "../../../type/Option";
import { Category } from "../../../type/Category";
import { RefObject } from "react";

export interface HomeProps {
  mapForwardedRef: RefObject<MapRef>;
  categorys: Category[] | undefined;
  pagedEvents?: Event[];
  hasMoreEvents: boolean;
  popup?: Event;
  handleScroll: () => void;
  setSearchCategory: (option: Option | undefined) => void;
  setSearchPlace: (place: Place) => void;
  setSearchDistance: (option: Option | undefined) => void;
  isMobileDevice: boolean;
  isTabletDevice: boolean;
  isDesktopDevice: boolean;
}
