import { loadStripe } from "@stripe/stripe-js";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import CreateView from "./Create.view";

import { uploadImage } from "../../../service/s3";
import { useGetCategorysQuery } from "../../../slice/categoryApiSlice";
import { useAddGroupMutation } from "../../../slice/groupApiSlice";
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

      const imageUrl =
        typeof values.image === "object"
          ? await uploadImage("group", values.image)
          : values.image;
      const thumbnailUrl =
        typeof values.thumbnail === "object"
          ? await uploadImage("group", values.thumbnail)
          : values.thumbnail;

      if (
        values.category &&
        values.latitude &&
        values.longitude &&
        thumbnailUrl &&
        imageUrl
      ) {
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

      const imageUrl =
        typeof formValues.image === "object"
          ? await uploadImage("group", formValues.image)
          : formValues.image;
      const thumbnailUrl =
        typeof formValues.thumbnail === "object"
          ? await uploadImage("group", formValues.thumbnail)
          : formValues.thumbnail;

      if (
        formValues.category &&
        formValues.latitude &&
        formValues.longitude &&
        thumbnailUrl &&
        imageUrl
      ) {
        const addGroupResponse = await addGroup({
          address: formValues.address,
          categoryId: formValues.category?.value,
          description: formValues.description,
          imageUrl: imageUrl,
          latitude: formValues.latitude,
          longitude: formValues.longitude,
          name: formValues.name,
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
