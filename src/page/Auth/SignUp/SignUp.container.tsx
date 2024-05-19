import { useNavigate } from "react-router-dom";
import { Form } from "./SignUp.props";
import SignUpView from "./SignUp.view";
import { useSignUpMutation } from "../../../slice/authApiSlice";
import { uploadImage } from "../../../service/s3";

const SignUp = (): JSX.Element => {
  const navigate = useNavigate();
  const [signUp] = useSignUpMutation();

  const initialValues: Form = {
    email: "",
    password: "",
    confirmPassword: "",
    image: undefined,
    name: "",
    place: undefined,
    address: "",
    latitude: "",
    longitude: "",
    description: "",
  };

  const handleSubmit = async (values: Form) => {
    const imageUrl = await uploadImage("user", values.image);
    if (imageUrl) {
      const response = await signUp({
        email: values.email,
        password: values.password,
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
    handleSubmit,
    handleGoBack,
  };

  return <SignUpView {...props} />;
};

export default SignUp;
