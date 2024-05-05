import { ImageListType } from "react-images-uploading";

export type Sizing = "small" | "medium" | "large";

export interface InputMultipleImageProps {
  label?: string;
  images?: ImageListType;
  setImages: (images: ImageListType) => void;
  error?: string;
  sizing?: Sizing;
}
