import { Group } from "../../../type/Group";
import { Registration } from "../../../type/Registration";

export interface DetailProps {
  group: Group | undefined;
  registrations: Registration[];
  registration: Registration | undefined;
  isMobileDevice: boolean;
  isTabletDevice: boolean;
  isDesktopDevice: boolean;
  handleJoin: () => void;
  handleLeave: () => void;
}
