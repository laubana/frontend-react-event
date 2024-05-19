import { ImageType } from "react-images-uploading";
import { Comment } from "../../../type/Comment";
import { Event } from "../../../type/Event";
import { Image } from "../../../type/Image";
import { Registration } from "../../../type/Registration";

export interface DetailProps {
  accessToken: string | undefined;
  event: Event | undefined;
  registration: Registration | undefined;
  registrations: Registration[];
  pagedRegistrations: Registration[];
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
  handleRegistrationPagination: (items: any[]) => void;
  handleComment: () => void;
  handleCommentPagination: (items: any[]) => void;
  handleOpen: () => void;
  handleClose: () => void;
  handleImage: () => void;
  handleImagePagination: (items: any[]) => void;
}
