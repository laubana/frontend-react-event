import { ImageType } from "react-images-uploading";

export type Sizing = "mobile" | "desktop";

export interface InputSingleImageProps {
  sizing?: Sizing;
  image?: ImageType;
  setImage?: (image: ImageType) => void;
}
