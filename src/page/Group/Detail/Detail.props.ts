import { ImageType } from "react-images-uploading";

import { Category } from "../../../type/Category";
import { EventForm } from "../../../type/EventForm";
import { GroupComment } from "../../../type/GroupComment";
import { GroupRegistration } from "../../../type/GroupRegistration";
import { Group } from "../../../type/Group";
import { GroupForm } from "../../../type/GroupForm";
import { GroupImage } from "../../../type/GroupImage";

export interface DetailProps {
  accessToken: string | undefined;
  categorys: Category[];
  group: Group | undefined;
  groupComments: GroupComment[];
  groupImages: GroupImage[];
  groupRegistration: GroupRegistration | undefined;
  groupRegistrations: GroupRegistration[];
  handleAddGroupComment: () => void;
  handleCloseAddEvent: () => void;
  handleCloseAddGroupImage: () => void;
  handleCloseUpdateGroup: () => void;
  handleConfirmAddGroupImage: () => void;
  handleConfirmUpdateGroup: (values: GroupForm) => void;
  handleConfirmAddEvent: (values: EventForm) => void;
  handleGroupCommentPagination: (items: any[]) => void;
  handleGroupImagePagination: (items: any[]) => void;
  handleGroupRegistrationPagination: (items: any[]) => void;
  handleJoin: () => void;
  handleLeave: () => void;
  handleOpenAddEvent: () => void;
  handleOpenAddGroupImage: () => void;
  handleOpenUpdateGroup: () => void;
  inputComment: string;
  inputImage: ImageType | undefined;
  isLoading: boolean;
  isVisibleAddEvent: boolean;
  isVisibleAddGroupImage: boolean;
  isVisibleUpdateGroup: boolean;
  pagedGroupComments: GroupComment[];
  pagedGroupImages: GroupImage[];
  pagedGroupRegistrations: GroupRegistration[];
  setInputComment: (text: string) => void;
  setInputImage: (image: ImageType) => void;
}
