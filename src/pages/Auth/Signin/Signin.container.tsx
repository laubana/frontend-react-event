import { useContext, useState } from "react";
import SigninView from "./Signin.view";
import { SigninProps as SigninProps } from "./Signin.props";
import { useNavigate } from "react-router-dom";
import { UseUserContext } from "../../../context/UserContext";

const Signin = (): JSX.Element => {
  const navigate = useNavigate();
  const { signin } = UseUserContext();

  const [inputUserId, setInputUserId] = useState("laubana@gmail.com");
  const [inputUserPassword, setInputUserPassword] = useState("password");

  const handleOnSignin = async () => {
    signin(inputUserId, inputUserPassword);
  };

  const handleOnChangeInputUserId = (inputUserId: string) => {
    setInputUserId(inputUserId);
  };

  const handleOnChangeInputUserPassword = (inputUserPassword: string) => {
    setInputUserPassword(inputUserPassword);
  };

  const handleOnGoBack = () => {
    navigate(-1);
  };

  const handleOnSigninWithGoogle = () => {
    window.location.href =
      "http://localhost/square/oauth2/authorization/google";
  };

  const props: SigninProps = {
    userId: inputUserId,
    userPassword: inputUserPassword,

    handleOnChangeInputUserId: handleOnChangeInputUserId,
    handleOnChangeInputUserPassword: handleOnChangeInputUserPassword,
    handleOnSignin: handleOnSignin,
    handleOnGoBack: handleOnGoBack,
    handleOnSigninWithGoogle: handleOnSigninWithGoogle,
  };
  return <SigninView {...props} />;
};

export default Signin;
