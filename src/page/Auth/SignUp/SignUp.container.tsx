import { useNavigate } from "react-router-dom";
import { Form } from "./SignUp.props";
import SignUpView from "./SignUp.view";
import { FormikHelpers } from "formik";
import { useSignUpMutation } from "../../../slice/authApiSlice";

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
    description: "",
  };

  const handleSubmit = async (
    values: Form,
    formikHelpers: FormikHelpers<Form>
  ) => {
    console.log(values);
    const response = await signUp({
      email: values.email,
      password: values.password,
    }).unwrap();
    console.log(response);
  };

  const handleOnGoBack = () => {
    navigate(-1);
  };

  const props = {
    initialValues,
    handleSubmit,
  };

  return <SignUpView {...props} />;
};

export default SignUp;
