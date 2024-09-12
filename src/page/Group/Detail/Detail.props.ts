import { ImageType } from "react-images-uploading";

import { Category } from "../../../type/Category";
import { Group } from "../../../type/Group";
import { GroupComment } from "../../../type/GroupComment";
import { GroupForm } from "../../../type/GroupForm";
import { GroupImage } from "../../../type/GroupImage";
import { GroupRegistration } from "../../../type/GroupRegistration";

export interface DetailProps {
  accessToken: string | undefined;
  categorys: Category[];
  group: Group | undefined;
  groupComments: GroupComment[];
  groupImages: GroupImage[];
  groupRegistration: GroupRegistration | undefined;
  groupRegistrations: GroupRegistration[];
  handleAddEvent: () => void;
  handleAddGroupComment: () => void;
  handleCloseAddGroupImage: () => void;
  handleCloseUpdateGroup: () => void;
  handleConfirmAddGroupImage: () => void;
  handleConfirmUpdateGroup: (values: GroupForm) => void;
  handleGroupCommentPagination: (items: any[]) => void;
  handleGroupImagePagination: (items: any[]) => void;
  handleGroupRegistrationPagination: (items: any[]) => void;
  handleJoin: () => void;
  handleLeave: () => void;
  handleOpenAddGroupImage: () => void;
  handleOpenUpdateGroup: () => void;
  inputComment: string;
  inputImage: ImageType | undefined;
  isLoading: boolean;
  isVisibleAddGroupImage: boolean;
  isVisibleUpdateGroup: boolean;
  pagedGroupComments: GroupComment[];
  pagedGroupImages: GroupImage[];
  pagedGroupRegistrations: GroupRegistration[];
  setInputComment: (text: string) => void;
  setInputImage: (image: ImageType) => void;
}
