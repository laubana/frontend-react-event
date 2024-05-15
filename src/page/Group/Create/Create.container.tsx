import { useNavigate } from "react-router-dom";
import { Form } from "./Create.props";
import CreateView from "./Create.view";
import { useGetCategorysQuery } from "../../../slice/categoryApiSlice";
import { uploadImage } from "../../../service/s3";
import { useAddGroupMutation } from "../../../slice/groupApiSlice";

const Create = () => {
  const navigate = useNavigate();
  const { data: categorys } = useGetCategorysQuery();
  const [addGroup] = useAddGroupMutation();

  const initialValues: Form = {
    category: undefined,
    thumbnail: undefined,
    image: undefined,
    name: "",
    place: undefined,
    address: "",
    latitude: "",
    longitude: "",
    description: "",
  };

  const handleSubmit = async (values: Form) => {
    const imageUrl = await uploadImage("group", values.image);
    if (values.category && imageUrl) {
      const response = await addGroup({
        categoryId: values.category?.value,
        userId: "663977b7b29b34723e563118",
        imageUrl: imageUrl,
        name: values.name,
        address: values.address,
        latitude: values.latitude,
        longitude: values.longitude,
        description: values.description,
      }).unwrap();
    }
  };

  const handleGoBack = () => {
    navigate(-1);
  };

  const props = {
    initialValues,

    categorys,

    handleSubmit,
    handleGoBack,
  };
  return <CreateView {...props} />;
};

export default Create;
