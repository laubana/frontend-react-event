import * as Yup from "yup";
import { Formik } from "formik";
import { FaGoogle } from "react-icons/fa6";
import { SignInProps } from "./SignIn.props";
import { Container } from "./SignIn.style";
import Button from "../../../component/Button";
import Grid from "../../../component/Grid";
import Text from "../../../component/Text";
import InputText from "../../../component/InputText";
import InputPassword from "../../../component/InputPassword";

const SigninView = (props: SignInProps) => {
  const { initialValues, handleSubmit, handleGoBack, handleGoogle } = props;

  const validationSchema = Yup.object().shape({
    email: Yup.string().required("Email is required."),
    password: Yup.string()
      .required("Password is required.")
      .min(6, "Password must be at least 6 characters."),
  });

  return (
    <Container>
      <Text sizing="large">Sign In</Text>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({
          handleSubmit,
          values,
          setFieldValue,
          touched,
          setTouched,
          errors,
        }) => (
          <Grid style={{ gap: "32px" }}>
            <Grid>
              <InputText
                label="Email"
                placeholder="Email"
                text={values.email}
                setText={(text) => setFieldValue("email", text)}
                error={touched.email ? errors.email : ""}
              />
              <InputPassword
                label="Password"
                placeholder="Password"
                password={values.password}
                setPassword={(password) => {
                  setTouched({ password: true });
                  setFieldValue("password", password);
                }}
                error={touched.password ? errors.password : ""}
              />
            </Grid>
            <Button onClick={handleSubmit} block>
              Sign In
            </Button>
          </Grid>
        )}
      </Formik>
      <Grid>
        <Button onClick={handleGoogle}>
          <FaGoogle size={16} />
          Sign In with Google
        </Button>
      </Grid>
      <Button coloring="black" onClick={handleGoBack} block>
        Go Back
      </Button>
    </Container>
  );
};

export default SigninView;
