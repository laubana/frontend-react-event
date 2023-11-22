import { Group } from "../../../type/Group";
import { Location } from "../../../type/Location";
import { MapRef } from "react-map-gl";
import { Place } from "../../../type/Place";
import { Option } from "../../../type/Option";
import { Category } from "../../../type/Category";

export interface HomeProps {
  mapRef: React.RefObject<MapRef>;
  currentAddress?: string;
  currentLocation?: Location;

  categories?: Category[];
  pagedGroups?: Group[];
  hasMoreGroups: boolean;

  popup?: Group;

  handleScroll: () => void;
  handleOpenPopup: (group: Group) => void;
  handleClosePopup: () => void;
  handleChangePk: (option: Option) => void;
  handleChangeLocation: (place: Place) => void;
  handleChangeDistance: (option: Option) => void;

  isMobileDevice: boolean;
  isTabletDevice: boolean;
  isDesktopDevice: boolean;
}
