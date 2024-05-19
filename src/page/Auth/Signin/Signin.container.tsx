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
    email: "",
    password: "",
  };

  const handleSubmit = async (values: Form) => {
    try {
      const response = await signIn({
        email: values.email,
        password: values.password,
      }).unwrap();
      console.log(response.data);
      dispatch(setAuth(response.data));
      navigate("/");
    } catch (error) {}
  };

  const handleGoBack = () => {
    navigate(-1);
  };

  const handleGoogle = async () => {
    const url = [
      `https://accounts.google.com/o/oauth2/v2/auth?client_id=${process.env.REACT_APP_GOOGLE_CLIENT_ID}`,
      `redirect_uri=http://localhost:3501/auth/oauth`,
      `response_type=code`,
      `scope=openid profile email`,
    ].join("&");
    document.location.href = url;
  };

  const props = {
    initialValues,
    handleSubmit,
    handleGoBack,
    handleGoogle,
  };

  return <SigninView {...props} />;
};

export default SignIn;
