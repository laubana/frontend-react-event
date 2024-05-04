import { useState } from "react";
import SigninView from "./Signin.view";
import { SigninProps as SigninProps } from "./Signin.props";
import { useNavigate } from "react-router-dom";
import { UseUserContext } from "../../../context/UserContext";

const Signin = (): JSX.Element => {
  const navigate = useNavigate();
  const { signin } = UseUserContext();

  const [userId, setUserId] = useState<string>("laubana@gmail.com");
  const [userPassword, setUserPassword] = useState<string>("password");

  const handleSignin = async () => {
    signin(userId, userPassword);
  };

  const handleChangeUserId = (inputUserId: string) => {
    setUserId(inputUserId);
  };

  const handleChangeUserPassword = (userPassword: string) => {
    setUserPassword(userPassword);
  };

  const handleGoBack = () => {
    navigate(-1);
  };

  const handleSigninWithGoogle = () => {
    window.location.href =
      "http://localhost/square/oauth2/authorization/google";
  };

  const props: SigninProps = {
    userId,
    userPassword,

    handleChangeUserId,
    handleChangeUserPassword,
    handleSignin,
    handleGoBack,
    handleSigninWithGoogle,
  };
  return <SigninView {...props} />;
};

export default Signin;
