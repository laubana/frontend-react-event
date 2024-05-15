import { ImageType } from "react-images-uploading";
import { Comment } from "../../../type/Comment";
import { Group } from "../../../type/Group";
import { Image } from "../../../type/Image";
import { Registration } from "../../../type/Registration";

export interface DetailProps {
  group: Group | undefined;
  registrations: Registration[];
  registration: Registration | undefined;
  comments: Comment[];
  pagedComments: Comment[];
  inputComment: string;
  setInputComment: (text: string) => void;
  isVisible: boolean;
  images: Image[];
  pagedImages: Image[];
  inputImage: ImageType | undefined;
  setInputImage: (image: ImageType) => void;
  handleJoin: () => void;
  handleLeave: () => void;
  handleComment: () => void;
  handleCommentPagination: (items: any[]) => void;
  handleOpen: () => void;
  handleClose: () => void;
  handleImage: () => void;
  handleImagePagination: (items: any[]) => void;
}
