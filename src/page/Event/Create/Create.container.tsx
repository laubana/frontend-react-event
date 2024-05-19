import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { Form } from "./Create.props";
import CreateView from "./Create.view";
import { useGetCategorysQuery } from "../../../slice/categoryApiSlice";
import { uploadImage } from "../../../service/s3";
import { useAddEventMutation } from "../../../slice/eventApiSlice";

const Create = () => {
  const navigate = useNavigate();
  const { data: categorys = { message: "", data: [] } } =
    useGetCategorysQuery();

  const [addEvent] = useAddEventMutation();

  const [isVisible, setIsVisible] = useState<boolean>(false);

  const initialValues: Form = {
    category: undefined,
    thumbnail: undefined,
    image: undefined,
    name: uuidv4(),
    place: undefined,
    address: "",
    latitude: "",
    longitude: "",
    description: "desc",
  };

  const handleSubmit = async (values: Form) => {
    const imageUrl = await uploadImage("event", values.image);
    const thumbnailUrl = await uploadImage("event", values.thumbnail);
    if (values.category && thumbnailUrl && imageUrl) {
      setIsVisible(true);
      try {
        const response = await addEvent({
          categoryId: values.category?.value,
          thumbnailUrl: thumbnailUrl,
          imageUrl: imageUrl,
          name: values.name,
          address: values.address,
          latitude: values.latitude,
          longitude: values.longitude,
          description: values.description,
        }).unwrap();

        window.location.href = response.data.url;
      } catch (error) {
        setIsVisible(false);
      }
    }
  };

  const handleGoBack = () => {
    navigate(-1);
  };

  const props = {
    categorys: categorys.data,
    handleGoBack,
    handleSubmit,
    initialValues,
    isVisible,
  };
  return <CreateView {...props} />;
};

export default Create;
