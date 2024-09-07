import { ImageType } from "react-images-uploading";

import { Event } from "../../../type/Event";
import { EventComment } from "../../../type/EventComment";
import { EventForm } from "../../../type/EventForm";
import { EventImage } from "../../../type/EventImage";
import { EventRegistration } from "../../../type/EventRegistration";

export interface DetailProps {
  accessToken: string | undefined;
  event: Event | undefined;
  eventComments: EventComment[];
  eventImages: EventImage[];
  eventRegistration: EventRegistration | undefined;
  eventRegistrations: EventRegistration[];
  handleAddEventComment: () => void;
  handleCloseAddEventImage: () => void;
  handleCloseUpdateEvent: () => void;
  handleConfirmAddEventImage: () => void;
  handleConfirmUpdateEvent: (values: EventForm) => void;
  handleEventCommentPagination: (items: any[]) => void;
  handleEventImagePagination: (items: any[]) => void;
  handleEventRegistrationPagination: (items: any[]) => void;
  handleOpenAddEventImage: () => void;
  handleOpenUpdateEvent: () => void;
  inputComment: string;
  inputImage: ImageType | undefined;
  isLoading: boolean;
  isVisibleAddEventImage: boolean;
  isVisibleUpdateEvent: boolean;
  pagedEventComments: EventComment[];
  pagedEventImages: EventImage[];
  pagedEventRegistrations: EventRegistration[];
  setInputComment: (text: string) => void;
  setInputImage: (image: ImageType) => void;
}
