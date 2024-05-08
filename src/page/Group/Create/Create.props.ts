import { ImageType } from "react-images-uploading";
import { Place } from "../../../type/Place";
import { Category } from "../../../type/Category";
import { Option } from "../../../type/Option";

export type Form = {
  category: Option | undefined;
  image: ImageType | undefined;
  name: string;
  place: Place | undefined;
  address: string;
  latitude: string;
  longitude: string;
  description: string;
};

export interface CreateProps {
  categorys: Category[] | undefined;
  initialValues: Form;
  handleSubmit: (values: Form) => void;
  handleGoBack: () => void;
}
