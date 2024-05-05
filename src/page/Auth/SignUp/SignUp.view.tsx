import * as Yup from "yup";
import { Formik } from "formik";
import { SignUpProps } from "./SignUp.props";
import { Container } from "./SignUp.style";
import Grid from "../../../component/Grid";
import Text from "../../../component/Text";
import Button from "../../../component/Button";
import InputText from "../../../component/InputText";
import InputPassword from "../../../component/InputPassword";
import InputSingleImage from "../../../component/InputSingleImage";
import InputTextArea from "../../../component/InputTextArea";

import "mapbox-gl/dist/mapbox-gl.css";
import InputPlace from "../../../component/InputPlace";

const SignUpView = (props: SignUpProps) => {
  const { initialValues, handleSubmit } = props;

  const validationSchema = Yup.object({
    email: Yup.string().required("Email is required"),
    password: Yup.string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters"),
    confirmPassword: Yup.string()
      .required("Confirm password is required")
      .oneOf([Yup.ref("password")], "Password and confirm password must match")
      .min(6, "Confirm password must be at least 6 characters"),
    image: Yup.object().required("Image is required"),
    name: Yup.string().required("Name is required"),
    place: Yup.object().required("Place is required"),
    description: Yup.string().required("Description is required"),
  });

  return (
    <Container>
      <Text sizing="large">Sign Up</Text>
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
                error={
                  touched.password || touched.confirmPassword
                    ? errors.password
                    : ""
                }
              />
              <InputPassword
                label="Confirm Password"
                placeholder="Confirm Password"
                password={values.confirmPassword}
                setPassword={(password) => {
                  setTouched({ confirmPassword: true });
                  setFieldValue("confirmPassword", password);
                }}
                error={
                  touched.password || touched.confirmPassword
                    ? errors.confirmPassword
                    : ""
                }
              />
              <InputSingleImage
                label="Image"
                image={values.image}
                setImage={(image) => {
                  setFieldValue("image", image);
                }}
                error={touched.image ? errors.image : ""}
              />
              <InputText
                label="Name"
                placeholder="Name"
                text={values.name}
                setText={(text) => setFieldValue("name", text)}
                error={touched.name ? errors.name : ""}
              />
              <InputPlace
                label="Place"
                placeholder="Place"
                setPlace={(place) => setFieldValue("place", place)}
                error={touched.place ? errors.place : ""}
              />
              <InputTextArea
                label="Description"
                placeholder="Description"
                text={values.description}
                setText={(text) => setFieldValue("description", text)}
                error={touched.description ? errors.description : ""}
              />
            </Grid>
            <Button onClick={handleSubmit} block>
              Sign Up
            </Button>
          </Grid>
        )}
      </Formik>
    </Container>
  );
};

export default SignUpView;
