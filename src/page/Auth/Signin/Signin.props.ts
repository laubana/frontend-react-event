export type Form = {
  email: string;
  password: string;
};

export interface SignInProps {
  initialValues: Form;
  handleSubmit: (values: Form) => void;
  handleGoBack: () => void;
  handleGoogle: () => void;
}
