import { ImageListType } from "react-images-uploading";

import { Size } from "../../type/Size";

export interface InputMultipleImageProps {
  label?: string;
  images?: ImageListType;
  setImages: (images: ImageListType) => void;
  error?: string;
  size?: Size;
}
