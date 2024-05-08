import { useNavigate } from "react-router-dom";
import { Form } from "./SignIn.props";
import SigninView from "./SignIn.view";
import { useSignInMutation } from "../../../slice/authApiSlice";
import { useDispatch } from "react-redux";
import { store } from "../../../store/store";
import { setAuth } from "../../../slice/authSlice";

const SignIn = (): JSX.Element => {
  const navigate = useNavigate();
  const [signIn] = useSignInMutation();
  const dispatch = useDispatch<typeof store.dispatch>();

  const initialValues: Form = {
    email: "e@t.c",
    password: "123123",
  };

  const handleSubmit = async (values: Form) => {
    try {
      const response = await signIn({
        email: values.email,
        password: values.password,
      }).unwrap();
      dispatch(setAuth(response));
      navigate("/");
    } catch (error) {}
  };

  const handleGoBack = () => {
    navigate(-1);
  };

  const handleSigninWithGoogle = () => {
    window.location.href =
      "http://localhost/square/oauth2/authorization/google";
  };

  const props = {
    initialValues,
    handleSubmit,
    handleGoBack,
    handleSigninWithGoogle,
  };
  return <SigninView {...props} />;
};

export default SignIn;
