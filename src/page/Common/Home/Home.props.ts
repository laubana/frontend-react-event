import { RefObject } from "react";
import { MapRef } from "react-map-gl";

import { Category } from "../../../type/Category";
import { Group } from "../../../type/Group";
import { Option } from "../../../type/Option";
import { Place } from "../../../type/Place";

export interface HomeProps {
  categorys: Category[] | undefined;
  handleScroll: () => void;
  hasMoreGroups: boolean;
  isDesktopDevice: boolean;
  isMobileDevice: boolean;
  isTabletDevice: boolean;
  mapForwardedRef: RefObject<MapRef>;
  pagedGroups?: Group[];
  setSearchCategory: (option: Option | undefined) => void;
  setSearchDistance: (option: Option | undefined) => void;
  setSearchPlace: (place: Place) => void;
}
