import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { ImageType } from "react-images-uploading";

import DetailView from "./Detail.view";

import { selectAccessToken } from "../../../slice/authSlice";
import { useGetCategorysQuery } from "../../../slice/categoryApiSlice";
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
import { useUploadImageMutation } from "../../../slice/s3ApiSlice";
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
  const [addGroupComment] = useAddGroupCommentMutation();
  const [addGroupImage] = useAddGroupImageMutation();
  const [addGroupRegistration] = useAddGroupRegistrationMutation();
  const [deleteGroupRegistration] = useDeleteGroupRegistrationMutation();
  const [updateGroup] = useUpdateGroupMutation();
  const [uploadImage] = useUploadImageMutation();

  const [inputComment, setInputComment] = useState<string>("");
  const [inputImage, setInputImage] = useState<ImageType | undefined>(
    undefined
  );
  const [isLoading, setIsLoading] = useState<boolean>(false);
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

  const handleAddEvent = () => {
    navigate(`/event/create/${groupId}`);
  };

  const handleAddGroupComment = () => {
    if (inputComment) {
      if (groupId) {
        addGroupComment({ groupId, value: inputComment });
      }
    }
  };

  const handleCloseAddGroupImage = () => {
    setIsVisibleAddGroupImage(false);
  };

  const handleCloseUpdateGroup = () => {
    setIsVisibleUpdateGroup(false);
  };

  const handleConfirmAddGroupImage = async () => {
    try {
      setIsLoading(true);

      if (groupId && inputImage && inputImage.file) {
        const formData = new FormData();
        formData.append("directory", "images/groups");
        formData.append("file", inputImage.file);

        const uploadImageResponse = await uploadImage(formData).unwrap();

        const imageUrl = uploadImageResponse.data;

        await addGroupImage({
          groupId,
          imageUrl,
        }).unwrap();
        setIsVisibleAddGroupImage(false);
        setInputImage(undefined);
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

      if (
        groupId &&
        values.category &&
        ((typeof values.image === "string" && values.image) ||
          (typeof values.image !== "string" &&
            values.image &&
            values.image.file)) &&
        values.latitude &&
        values.longitude &&
        ((typeof values.thumbnail === "string" && values.thumbnail) ||
          (typeof values.thumbnail !== "string" &&
            values.thumbnail &&
            values.thumbnail.file))
      ) {
        let imageUrl;
        if (typeof values.image === "string" && values.image) {
          imageUrl = values.image;
        } else if (
          typeof values.image !== "string" &&
          values.image &&
          values.image.file
        ) {
          const formData = new FormData();
          formData.append("directory", "images/groups");
          formData.append("file", values.image.file);

          const uploadImageResponse = await uploadImage(formData).unwrap();

          imageUrl = uploadImageResponse.data;
        } else {
          return;
        }

        let thumbnailUrl;
        if (typeof values.thumbnail === "string" && values.thumbnail) {
          thumbnailUrl = values.thumbnail;
        } else if (
          typeof values.thumbnail !== "string" &&
          values.thumbnail &&
          values.thumbnail.file
        ) {
          const formData = new FormData();
          formData.append("directory", "images/groups");
          formData.append("file", values.thumbnail.file);

          const uploadImageResponse = await uploadImage(formData).unwrap();

          thumbnailUrl = uploadImageResponse.data;
        } else {
          return;
        }

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
    handleAddEvent,
    handleAddGroupComment,
    handleCloseAddGroupImage,
    handleCloseUpdateGroup,
    handleConfirmAddGroupImage,
    handleConfirmUpdateGroup,
    handleGroupCommentPagination,
    handleGroupImagePagination,
    handleGroupRegistrationPagination,
    handleJoin,
    handleLeave,
    handleOpenAddGroupImage,
    handleOpenUpdateGroup,
    inputComment,
    inputImage,
    isLoading,
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
