import { CSSProperties } from "react";
import { ImageType } from "react-images-uploading";

export type Sizing = "small" | "medium" | "large";

export interface InputSingleImageProps {
  label?: string;
  image: ImageType | undefined;
  setImage: (image: ImageType) => void;
  error?: string;
  sizing?: Sizing;
  style?: CSSProperties;
}
