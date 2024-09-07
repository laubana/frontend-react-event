import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { ImageType } from "react-images-uploading";

import DetailView from "./Detail.view";

import { uploadImage } from "../../../service/s3";
import { selectAccessToken } from "../../../slice/authSlice";
import { useGetCategorysQuery } from "../../../slice/categoryApiSlice";
import { useAddEventMutation } from "../../../slice/eventApiSlice";
import {
  useGetGroupQuery,
  useUpdateGroupMutation,
} from "../../../slice/groupApiSlice";
import {
  useAddGroupCommentMutation,
  useGetGroupCommentsQuery,
} from "../../../slice/groupCommentApiSlice";
import {
  useAddGroupImageMutation,
  useGetGroupImagesQuery,
} from "../../../slice/groupImageApiSlice";
import {
  useAddGroupRegistrationMutation,
  useDeleteGroupRegistrationMutation,
  useGetGroupRegistrationQuery,
  useGetGroupRegistrationsQuery,
} from "../../../slice/groupRegistrationApiSlice";
import { EventForm } from "../../../type/EventForm";
import { GroupComment } from "../../../type/GroupComment";
import { GroupForm } from "../../../type/GroupForm";
import { GroupImage } from "../../../type/GroupImage";
import { GroupRegistration } from "../../../type/GroupRegistration";

const Detail = () => {
  const { groupId } = useParams();
  const navigate = useNavigate();

  const accessToken = useSelector(selectAccessToken);

  const { data: categorys = { message: "", data: [] } } =
    useGetCategorysQuery();
  const {
    data: group = { message: "", data: undefined },
    refetch: refetchGroup,
  } = useGetGroupQuery(groupId, { skip: !groupId });
  const { data: groupComments = { message: "", data: [] } } =
    useGetGroupCommentsQuery(groupId, { skip: !groupId });
  const { data: groupImages = { message: "", data: [] } } =
    useGetGroupImagesQuery(groupId, { skip: !groupId });
  const { data: groupRegistration = { message: "", data: undefined } } =
    useGetGroupRegistrationQuery(groupId, { skip: !groupId });
  const { data: groupRegistrations = { message: "", data: [] } } =
    useGetGroupRegistrationsQuery(groupId, { skip: !groupId });
  const [addEvent] = useAddEventMutation();
  const [addGroupComment] = useAddGroupCommentMutation();
  const [addGroupImage] = useAddGroupImageMutation();
  const [addGroupRegistration] = useAddGroupRegistrationMutation();
  const [deleteGroupRegistration] = useDeleteGroupRegistrationMutation();
  const [updateGroup] = useUpdateGroupMutation();

  const [inputComment, setInputComment] = useState<string>("");
  const [inputImage, setInputImage] = useState<ImageType | undefined>(
    undefined
  );
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isVisibleAddEvent, setIsVisibleAddEvent] = useState<boolean>(false);
  const [isVisibleAddGroupImage, setIsVisibleAddGroupImage] =
    useState<boolean>(false);
  const [isVisibleUpdateGroup, setIsVisibleUpdateGroup] =
    useState<boolean>(false);
  const [pagedGroupComments, setPagedGroupComments] = useState<GroupComment[]>(
    []
  );
  const [pagedGroupImages, setPagedGroupImages] = useState<GroupImage[]>([]);
  const [pagedGroupRegistrations, setPagedGroupRegistrations] = useState<
    GroupRegistration[]
  >([]);

  const handleAddGroupComment = () => {
    if (inputComment) {
      if (groupId) {
        addGroupComment({ groupId, value: inputComment });
      }
    }
  };

  const handleCloseAddEvent = () => {
    setIsVisibleAddEvent(false);
  };

  const handleCloseAddGroupImage = () => {
    setIsVisibleAddGroupImage(false);
  };

  const handleCloseUpdateGroup = () => {
    setIsVisibleUpdateGroup(false);
  };

  const handleConfirmAddEvent = async (values: EventForm) => {
    try {
      if (groupId) {
        const addEventResponse = await addEvent({
          dateTimes: values.dateTimes,
          description: values.description,
          fee: values.fee,
          groupId: groupId,
          name: values.name,
          places: values.places,
        }).unwrap();

        navigate(`/event/${addEventResponse.data._id}`);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleConfirmAddGroupImage = async () => {
    try {
      if (inputImage) {
        setIsLoading(true);

        const imageUrl = await uploadImage("group-image", inputImage);
        if (groupId && imageUrl) {
          await addGroupImage({
            groupId,
            imageUrl,
          }).unwrap();
          setIsVisibleAddGroupImage(false);
          setInputImage(undefined);
        }
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleConfirmUpdateGroup = async (values: GroupForm) => {
    try {
      setIsLoading(true);

      const imageUrl =
        typeof values.image === "object"
          ? await uploadImage("group", values.image)
          : values.image;
      const thumbnailUrl =
        typeof values.thumbnail === "object"
          ? await uploadImage("group", values.thumbnail)
          : values.thumbnail;

      if (
        groupId &&
        imageUrl &&
        values.category &&
        values.latitude &&
        values.longitude &&
        thumbnailUrl
      ) {
        await updateGroup({
          address: values.address,
          categoryId: values.category.value,
          description: values.description,
          groupId,
          imageUrl,
          latitude: values.latitude,
          longitude: values.longitude,
          name: values.name,
          thumbnailUrl,
        }).unwrap();

        refetchGroup();
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleGroupCommentPagination = (items: any[]) => {
    setPagedGroupComments(items);
  };

  const handleGroupImagePagination = (items: any[]) => {
    setPagedGroupImages(items);
  };

  const handleGroupRegistrationPagination = (items: any[]) => {
    setPagedGroupRegistrations(items);
  };

  const handleJoin = () => {
    if (groupId) {
      addGroupRegistration({ groupId });
    }
  };

  const handleLeave = () => {
    if (groupRegistration.data && groupRegistration.data.group._id) {
      deleteGroupRegistration({
        groupRegistrationId: groupRegistration.data._id,
      });
    }
  };

  const handleOpenAddEvent = () => {
    setIsVisibleAddEvent(true);
  };

  const handleOpenAddGroupImage = () => {
    setIsVisibleAddGroupImage(true);
  };

  const handleOpenUpdateGroup = () => {
    setIsVisibleUpdateGroup(true);
  };

  const props = {
    accessToken,
    categorys: categorys.data,
    group: group.data,
    groupComments: groupComments.data,
    groupImages: groupImages.data,
    groupRegistration: groupRegistration.data,
    groupRegistrations: groupRegistrations.data,
    handleAddGroupComment,
    handleCloseAddEvent,
    handleCloseAddGroupImage,
    handleCloseUpdateGroup,
    handleConfirmAddEvent,
    handleConfirmAddGroupImage,
    handleConfirmUpdateGroup,
    handleGroupCommentPagination,
    handleGroupImagePagination,
    handleGroupRegistrationPagination,
    handleJoin,
    handleLeave,
    handleOpenAddEvent,
    handleOpenAddGroupImage,
    handleOpenUpdateGroup,
    inputComment,
    inputImage,
    isLoading,
    isVisibleAddEvent,
    isVisibleAddGroupImage,
    isVisibleUpdateGroup,
    pagedGroupComments,
    pagedGroupImages,
    pagedGroupRegistrations,
    setInputComment,
    setInputImage,
  };

  return <DetailView {...props} />;
};

export default Detail;
