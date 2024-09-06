import { CSSProperties } from "react";
import { ImageType } from "react-images-uploading";

export type Sizing = "small" | "medium" | "large";

export interface InputSingleImageProps {
  error?: string;
  image?: ImageType | string;
  label?: string;
  setImage: (image: ImageType) => void;
  sizing?: Sizing;
  style?: CSSProperties;
}
