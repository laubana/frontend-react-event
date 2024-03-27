import { FaGoogle } from "react-icons/fa6";
import Button from "../../../component/Button";
import Grid from "../../../component/Grid";
import Text from "../../../component/Text";
import InputText from "../../../component/InputText";
import { SigninProps } from "./Signin.props";
import { Container } from "./Signin.style";
import InputPassword from "../../../component/InputPassword";

const SigninView = (props: SigninProps) => {
  const {
    userId,
    userPassword,

    handleOnChangeInputUserId,
    handleOnChangeInputUserPassword,
    handleOnSignin,
    handleOnGoBack,
    handleOnSigninWithGoogle,
  } = props;

  return (
    <Container>
      <Grid style={{ gap: "64px" }}>
        <Text type="h1">Sign In</Text>
        <Grid>
          <Text type="h2">ID</Text>
          <InputText
            text={userId}
            setText={handleOnChangeInputUserId}
            placeholder="ID"
          />
          <Text type="h2">Password</Text>
          <InputPassword
            text={userPassword}
            setText={handleOnChangeInputUserPassword}
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
