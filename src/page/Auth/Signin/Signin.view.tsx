import { FaGoogle } from "react-icons/fa6";
import Button from "../../../component/Button";
import Grid from "../../../component/Grid";
import Text from "../../../component/Text";
import InputText from "../../../component/InputText";
import { SignInProps } from "./Signin.props";
import { Container } from "./Signin.style";
import InputPassword from "../../../component/InputPassword";

const SigninView = (props: SignInProps) => {
  const {
    userId,
    userPassword,

    handleChangeUserId: handleOnChangeInputUserId,
    handleChangeUserPassword: handleOnChangeInputUserPassword,
    handleSignin: handleOnSignin,
    handleGoBack: handleOnGoBack,
    handleSigninWithGoogle: handleOnSigninWithGoogle,
  } = props;

  return (
    <Container>
      <Grid style={{ gap: "64px" }}>
        <Text>Sign In</Text>
        <Grid>
          <Text>ID</Text>
          <InputText
            text={userId}
            setText={handleOnChangeInputUserId}
            placeholder="ID"
          />
          <Text>Password</Text>
          <InputPassword
            password={userPassword}
            setPassword={handleOnChangeInputUserPassword}
          />
          <Button onClick={handleOnSignin} block>
            Sign In
          </Button>
          <Button color="black" onClick={handleOnGoBack} block>
            Go Back
          </Button>
        </Grid>
        <Grid>
          <Button block onClick={handleOnSigninWithGoogle}>
            <FaGoogle /> Sign In with Google
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default SigninView;
