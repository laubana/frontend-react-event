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
import { useAddTransactionMutation } from "../../../slice/transactionApiSlice";
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
  const [addTransaction] = useAddTransactionMutation();

  const [stage, setStage] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [initialValues, setInitialValues] = useState<GroupForm>({
    address: "",
    category: undefined,
    description: "",
    image: undefined,
    latitude: undefined,
    longitude: undefined,
    name: "",
    thumbnail: undefined,
  });
  const [clientSecret, setClientSecret] = useState<string>("");

  const handleClickNewCard = async () => {
    const addPaymentIntentResponse = await addPaymentIntent({ amount: 100 });
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
    setInitialValues(values);
    setStage((prevState) => ++prevState);
  };

  const handleSubmitExistingCard = async (paymentMethodId: string) => {
    try {
      setIsLoading(true);

      const addPaymentIntentResponse = await addPaymentIntent({
        amount: 300,
        paymentMethodId,
      });
      const addPaymentIntentData = addPaymentIntentResponse.data;

      if (addPaymentIntentData?.data.id) {
        const paymentIntentId = addPaymentIntentData.data.id;

        await addTransaction({ description: "New Group", paymentIntentId });

        const values = initialValues;

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
            categoryId: values.category.value,
            thumbnailUrl: thumbnailUrl,
            imageUrl: imageUrl,
            name: values.name,
            address: values.address,
            latitude: values.latitude,
            longitude: values.longitude,
            description: values.description,
          }).unwrap();

          navigate(`/group/${addGroupResponse.data._id}`);
        }
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

      await addTransaction({ description: "New Group", paymentIntentId });

      const values = initialValues;

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
          categoryId: values.category?.value,
          thumbnailUrl: thumbnailUrl,
          imageUrl: imageUrl,
          name: values.name,
          address: values.address,
          latitude: values.latitude,
          longitude: values.longitude,
          description: values.description,
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
    handleClickNewCard,
    handleGoBack,
    handleNext,
    handleSubmitExistingCard,
    handleSubmitNewCard,
    initialValues,
    isLoading,
    paymentMethods: paymentMethods.data,
    stage,
    stripePromise,
  };
  return <CreateView {...props} />;
};

export default Create;
