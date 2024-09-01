import { ImageType } from "react-images-uploading";
import { Place } from "../../../type/Place";

export type Form = {
  email: string;
  password: string;
  confirmPassword: string;
  image: ImageType | undefined;
  name: string;
  place: Place | undefined;
  address: string;
  latitude: number | undefined;
  longitude: number | undefined;
  description: string;
};

export interface SignUpProps {
  initialValues: Form;
  handleSubmit: (values: Form) => void;
  handleGoBack: () => void;
}
