import { Group } from "../../../type/Group";

export interface DetailProps {
  group: Group | undefined;
  isMobileDevice: boolean;
  isTabletDevice: boolean;
  isDesktopDevice: boolean;
}
