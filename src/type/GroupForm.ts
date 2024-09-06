import { ImageType } from "react-images-uploading";

import { Option } from "./Option";

export type GroupForm = {
  category?: Option;
  thumbnail?: ImageType | string;
  image?: ImageType | string;
  name: string;
  address: string;
  latitude?: number;
  longitude?: number;
  description: string;
};
