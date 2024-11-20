import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { ImageType } from "react-images-uploading";

import DetailView from "./Detail.view";

import { selectAccessToken } from "../../../slice/authSlice";
import { useGetEventQuery } from "../../../slice/eventApiSlice";
import {
  useAddEventCommentMutation,
  useGetEventCommentsQuery,
} from "../../../slice/eventCommentApiSlice";
import {
  useAddEventImageMutation,
  useGetEventImagesQuery,
} from "../../../slice/eventImageApiSlice";
import {
  useAddEventRegistrationMutation,
  useDeleteEventRegistrationMutation,
  useGetEventRegistrationQuery,
  useGetEventRegistrationsQuery,
} from "../../../slice/eventRegistrationApiSlice";
import { useUpdateGroupMutation } from "../../../slice/groupApiSlice";
import { useUploadImageMutation } from "../../../slice/s3ApiSlice";
import { EventComment } from "../../../type/EventComment";
import { EventForm } from "../../../type/EventForm";
import { EventImage } from "../../../type/EventImage";
import { EventRegistration } from "../../../type/EventRegistration";

const Detail = () => {
  const { eventId } = useParams();
  const navigate = useNavigate();

  const accessToken = useSelector(selectAccessToken);

  const {
    data: event = { message: "", data: undefined },
    refetch: refetchEvent,
  } = useGetEventQuery(eventId, { skip: !eventId });
  const { data: eventComments = { message: "", data: [] } } =
    useGetEventCommentsQuery(eventId, {
      skip: !eventId,
    });
  const { data: eventImages = { message: "", data: [] } } =
    useGetEventImagesQuery(eventId, { skip: !eventId });
  const { data: eventRegistration = { message: "", data: undefined } } =
    useGetEventRegistrationQuery(eventId, {
      skip: !eventId,
    });
  const { data: eventRegistrations = { message: "", data: [] } } =
    useGetEventRegistrationsQuery(eventId, {
      skip: !eventId,
    });
  const [addEventComment] = useAddEventCommentMutation();
  const [addEventImage] = useAddEventImageMutation();
  const [addEventRegistration] = useAddEventRegistrationMutation();
  const [deleteEventRegistration] = useDeleteEventRegistrationMutation();
  const [updateGroup] = useUpdateGroupMutation();
  const [uploadImage] = useUploadImageMutation();

  const [inputComment, setInputComment] = useState<string>("");
  const [inputImage, setInputImage] = useState<ImageType | undefined>(
    undefined
  );
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isVisibleAddEventImage, setIsVisibleAddEventImage] =
    useState<boolean>(false);
  const [isVisibleUpdateEvent, setIsVisibleUpdateEvent] =
    useState<boolean>(false);
  const [pagedEventComments, setPagedEventComments] = useState<EventComment[]>(
    []
  );
  const [pagedEventImages, setPagedEventImages] = useState<EventImage[]>([]);
  const [pagedEventRegistrations, setPagedEventRegistrations] = useState<
    EventRegistration[]
  >([]);

  const handleAddEventComment = () => {
    if (inputComment) {
      if (eventId) {
        addEventComment({ eventId: eventId, value: inputComment });
      }
    }
  };

  const handleCloseAddEventImage = () => {
    setIsVisibleAddEventImage(false);
  };

  const handleCloseUpdateEvent = () => {
    setIsVisibleUpdateEvent(false);
  };

  const handleConfirmAddEventImage = async () => {
    try {
      setIsLoading(true);

      if (eventId && inputImage && inputImage.file) {
        const formData = new FormData();
        formData.append("directory", "images/events");
        formData.append("file", inputImage.file);

        const uploadImageResponse = await uploadImage(formData).unwrap();

        const imageUrl = uploadImageResponse.data;

        await addEventImage({
          eventId,
          imageUrl,
        }).unwrap();
        setIsVisibleAddEventImage(false);
        setInputImage(undefined);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleConfirmUpdateEvent = async (values: EventForm) => {
    try {
      setIsLoading(true);

      //   if (
      //     eventId &
      //   ) {
      //     await updateGroup({
      //       address: values.address,
      //       categoryId: values.category.value,
      //       description: values.description,
      //       groupId: eventId,
      //       imageUrl,
      //       latitude: values.latitude,
      //       longitude: values.longitude,
      //       name: values.name,
      //       thumbnailUrl,
      //     }).unwrap();

      //     refetchEvent();
      //   }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleEventCommentPagination = (items: any[]) => {
    setPagedEventComments(items);
  };

  const handleEventImagePagination = (items: any[]) => {
    setPagedEventImages(items);
  };

  const handleEventRegistrationPagination = (items: any[]) => {
    setPagedEventRegistrations(items);
  };

  const handleOpenAddEventImage = () => {
    setIsVisibleAddEventImage(true);
  };

  const handleOpenUpdateEvent = () => {
    setIsVisibleUpdateEvent(true);
  };

  const props = {
    accessToken,
    event: event.data,
    eventComments: eventComments.data,
    eventImages: eventImages.data,
    eventRegistration: eventRegistration.data,
    eventRegistrations: eventRegistrations.data,
    handleAddEventComment,
    handleCloseAddEventImage,
    handleCloseUpdateEvent,
    handleConfirmAddEventImage,
    handleConfirmUpdateEvent,
    handleEventCommentPagination,
    handleEventImagePagination,
    handleEventRegistrationPagination,
    handleOpenAddEventImage,
    handleOpenUpdateEvent,
    inputComment,
    inputImage,
    isLoading,
    isVisibleAddEventImage,
    isVisibleUpdateEvent,
    pagedEventComments,
    pagedEventImages,
    pagedEventRegistrations,
    setInputComment,
    setInputImage,
  };

  return <DetailView {...props} />;
};

export default Detail;
