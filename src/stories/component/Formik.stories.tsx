import type { Meta, StoryObj } from "@storybook/react";
import { Formik, FormikHelpers } from "formik";
import * as Yup from "yup";
import Button from "../../component/Button";
import InputText from "../../component/InputText";
import InputPassword from "../../component/InputPassword";
import InputTextArea from "../../component/InputTextArea";

type Form = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  message: string;
};

const Component = () => {
  const initialValues: Form = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    message: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Your name is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Your email is required"),
    password: Yup.string()
      .required("Your password is required")
      .min(6, "Your password must be at least 6 characters"),
    confirmPassword: Yup.string()
      .required("Your confirm password is required")
      .oneOf(
        [Yup.ref("password")],
        "Your password and confirm password must match"
      )
      .min(6, "Your password must be at least 6 characters"),
    message: Yup.string().required("Your message is required"),
  });

  const handleSubtmit = (
    values: Form,
    formikHelpers: FormikHelpers<{
      name: string;
      email: string;
      password: string;
      confirmPassword: string;
      message: string;
    }>
  ) => {
    console.log(values);
    formikHelpers.resetForm({ values: initialValues });
  };

  return (
    <div style={{ display: "flex", gap: "16px" }}>
      <div style={{ display: "grid", gap: "16px" }}>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubtmit}
        >
          {({
            handleSubmit,
            values,
            setFieldValue,
            touched,
            setTouched,
            errors,
          }) => (
            <>
              <InputText
                label="Name"
                placeholder="Name"
                text={values.name}
                setText={(text) => setFieldValue("name", text)}
                error={touched.name ? errors.name : ""}
              />
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
              <InputTextArea
                label="Message"
                placeholder="Message"
                text={values.message}
                setText={(text) => setFieldValue("message", text)}
                error={touched.message ? errors.message : ""}
              />
              <Button onClick={handleSubmit}>Submit</Button>
            </>
          )}
        </Formik>
      </div>
    </div>
  );
};

const meta: Meta = {
  title: "Component/Formik",
  component: Component,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
