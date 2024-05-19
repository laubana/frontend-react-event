import { useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { ImageType } from "react-images-uploading";
import DetailView from "./Detail.view";
import { selectAccessToken } from "../../../slice/authSlice";
import { useGetEventQuery } from "../../../slice/eventApiSlice";
import {
  useGetRegistrationsEventQuery,
  useGetRegistrationQuery,
  useAddRegistrationMutation,
  useDeleteRegistrationMutation,
} from "../../../slice/registrationApiSlice";
import {
  useGetCommentsQuery,
  useAddCommentMutation,
} from "../../../slice/commentApiSlice";
import { Comment } from "../../../type/Comment";
import { Image } from "../../../type/Image";
import { Registration } from "../../../type/Registration";
import { uploadImage } from "../../../service/s3";
import {
  useGetImagesQuery,
  useAddImageMutation,
} from "../../../slice/imageApiSlice";
import { date } from "yup";

const Detail = () => {
  const { eventId } = useParams();

  const accessToken = useSelector(selectAccessToken);

  const { data: event = { message: "", data: undefined } } = useGetEventQuery(
    eventId,
    { skip: !eventId }
  );
  const { data: registration = { message: "", data: undefined } } =
    useGetRegistrationQuery(eventId, {
      skip: !eventId,
    });
  const { data: registrations = { message: "", data: [] } } =
    useGetRegistrationsEventQuery(eventId, {
      skip: !eventId,
    });
  const { data: comments = { message: "", data: [] } } = useGetCommentsQuery(
    eventId,
    {
      skip: !eventId,
    }
  );
  const { data: images = { message: "", data: [] } } = useGetImagesQuery(
    eventId,
    { skip: !eventId }
  );
  const [addComment] = useAddCommentMutation();
  const [addImage] = useAddImageMutation();
  const [addRegistration] = useAddRegistrationMutation();
  const [deleteRegistration] = useDeleteRegistrationMutation();

  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [pagedRegistrations, setPagedRegistrations] = useState<Registration[]>(
    []
  );
  const [pagedComments, setPagedComments] = useState<Comment[]>([]);
  const [inputComment, setInputComment] = useState<string>("");
  const [pagedImages, setPagedImages] = useState<Image[]>([]);
  const [inputImage, setInputImage] = useState<ImageType | undefined>(
    undefined
  );

  const handleJoin = () => {
    if (eventId) {
      addRegistration({ eventId: eventId });
    }
  };

  const handleLeave = () => {
    if (registration.data && registration.data.event._id) {
      deleteRegistration({ registrationId: registration.data._id });
    }
  };

  const handleRegistrationPagination = (items: any[]) => {
    setPagedRegistrations(items);
  };

  const handleComment = () => {
    if (event.data && event.data._id && inputComment) {
      addComment({ eventId: event.data._id, value: inputComment });
    }
  };

  const handleCommentPagination = (items: any[]) => {
    setPagedComments(items);
  };

  const handleOpen = () => {
    setIsVisible(true);
  };

  const handleClose = () => {
    setIsVisible(false);
  };

  const handleImage = async () => {
    if (inputImage) {
      const imageUrl = await uploadImage("image", inputImage);
      if (event.data && event.data._id && imageUrl) {
        const response = await addImage({
          eventId: event.data._id,
          imageUrl,
        }).unwrap();
      }
    }
  };

  const handleImagePagination = (items: any[]) => {
    setPagedImages(items);
  };

  const props = {
    accessToken,
    event: event.data,
    registration: registration.data,
    registrations: registrations.data,
    pagedRegistrations: registrations.data,
    comments: comments.data,
    pagedComments,
    inputComment,
    setInputComment,
    isVisible,
    images: images.data,
    pagedImages,
    inputImage,
    setInputImage,
    handleJoin,
    handleLeave,
    handleRegistrationPagination,
    handleComment,
    handleCommentPagination,
    handleOpen,
    handleClose,
    handleImage,
    handleImagePagination,
  };

  return <DetailView {...props} />;
};

export default Detail;
