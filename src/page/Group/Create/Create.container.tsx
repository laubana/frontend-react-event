import { loadStripe } from "@stripe/stripe-js";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import CreateView from "./Create.view";

import { useGetCategorysQuery } from "../../../slice/categoryApiSlice";
import { useAddGroupMutation } from "../../../slice/groupApiSlice";
import { useUploadImageMutation } from "../../../slice/s3ApiSlice";
import {
  useAddPaymentIntentMutation,
  useGetPaymentMethodsQuery,
} from "../../../slice/stripeApiSlice";
import { GroupForm } from "../../../type/GroupForm";

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC as string);

const Create = () => {
  const navigate = useNavigate();

  const { data: categorys = { message: "", data: [] } } =
    useGetCategorysQuery();
  const { data: paymentMethods = { message: "", data: [] } } =
    useGetPaymentMethodsQuery();
  const [addGroup] = useAddGroupMutation();
  const [addPaymentIntent] = useAddPaymentIntentMutation();
  const [uploadImage] = useUploadImageMutation();

  const [clientSecret, setClientSecret] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [formValues, setFormValues] = useState<GroupForm>({
    address: "",
    category: undefined,
    description: "",
    image: undefined,
    latitude: undefined,
    longitude: undefined,
    name: "",
    thumbnail: undefined,
  });
  const [stage, setStage] = useState<number>(0);

  const handleClickNewCard = async () => {
    const addPaymentIntentResponse = await addPaymentIntent({ amount: 300 });
    const addPaymentIntentData = addPaymentIntentResponse.data;

    if (addPaymentIntentData?.data.client_secret) {
      setClientSecret(addPaymentIntentData.data.client_secret);
    }
  };

  const handleGoBack = () => {
    if (stage === 0) {
      navigate(-1);
    } else {
      setStage((prevState) => --prevState);
    }
  };

  const handleNext = (values: GroupForm) => {
    setFormValues(values);
    setStage((prevState) => ++prevState);
  };

  const handleSubmitExistingCard = async (paymentMethodId: string) => {
    try {
      setIsLoading(true);

      const values = formValues;

      if (
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

        const addGroupResponse = await addGroup({
          address: values.address,
          categoryId: values.category.value,
          description: values.description,
          imageUrl: imageUrl,
          latitude: values.latitude,
          longitude: values.longitude,
          name: values.name,
          paymentMethodId,
          thumbnailUrl: thumbnailUrl,
        }).unwrap();

        navigate(`/group/${addGroupResponse.data._id}`);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmitNewCard = async (paymentIntentId: string) => {
    try {
      setIsLoading(true);

      const values = formValues;

      if (
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

        const addGroupResponse = await addGroup({
          address: values.address,
          categoryId: values.category?.value,
          description: values.description,
          imageUrl: imageUrl,
          latitude: values.latitude,
          longitude: values.longitude,
          name: values.name,
          paymentIntentId,
          thumbnailUrl: thumbnailUrl,
        }).unwrap();

        navigate(`/group/${addGroupResponse.data._id}`);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const props = {
    categorys: categorys.data,
    clientSecret,
    formValues,
    handleClickNewCard,
    handleGoBack,
    handleNext,
    handleSubmitExistingCard,
    handleSubmitNewCard,
    isLoading,
    paymentMethods: paymentMethods.data,
    stage,
    stripePromise,
  };
  return <CreateView {...props} />;
};

export default Create;
