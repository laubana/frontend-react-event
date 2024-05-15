import { useState } from "react";
import { useParams } from "react-router-dom";
import { ImageType } from "react-images-uploading";
import DetailView from "./Detail.view";
import { useGetGroupQuery } from "../../../slice/groupApiSlice";
import {
  useGetRegistrationsGroupQuery,
  useGetRegistrationQuery,
  useAddRegistrationMutation,
  useDeleteRegistrationMutation,
} from "../../../slice/registrationApiSlice";
import {
  useGetCommentsQuery,
  useAddCommentMutation,
} from "../../../slice/commentApiSlice";
import { Comment } from "../../../type/Comment";
import { uploadImage } from "../../../service/s3";
import {
  useGetImagesQuery,
  useAddImageMutation,
} from "../../../slice/imageApiSlice";
import { Image } from "../../../type/Image";

const Detail = () => {
  const { groupId } = useParams();

  const { data: group } = useGetGroupQuery(groupId);
  const { data: registrations = [] } = useGetRegistrationsGroupQuery({
    groupId,
  });
  const { data: registration } = useGetRegistrationQuery({ groupId });
  const [addRegistration] = useAddRegistrationMutation();
  const [deleteRegistration] = useDeleteRegistrationMutation();
  const { data: comments = [] } = useGetCommentsQuery({ groupId });
  const [addComment] = useAddCommentMutation();
  const { data: images = [] } = useGetImagesQuery({ groupId });
  const [addImage] = useAddImageMutation();

  const [pagedComments, setPagedComments] = useState<Comment[]>([]);
  const [inputComment, setInputComment] = useState<string>("");
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [pagedImages, setPagedImages] = useState<Image[]>([]);
  const [inputImage, setInputImage] = useState<ImageType | undefined>(
    undefined
  );

  const handleJoin = () => {
    if (groupId) {
      addRegistration({ groupId });
    }
  };

  const handleLeave = () => {
    if (registration?.group._id) {
      deleteRegistration({ registrationId: registration._id });
    }
  };

  const handleComment = () => {
    if (group?._id && inputComment) {
      addComment({ groupId: group._id, value: inputComment });
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
      if (group?._id && imageUrl) {
        const response = await addImage({
          groupId: group._id,
          imageUrl,
        }).unwrap();
      }
    }
  };

  const handleImagePagination = (items: any[]) => {
    setPagedImages(items);
  };

  const props = {
    group,
    registrations,
    registration,
    comments,
    pagedComments,
    inputComment,
    setInputComment,
    isVisible,
    images,
    pagedImages,
    inputImage,
    setInputImage,
    handleJoin,
    handleLeave,
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
