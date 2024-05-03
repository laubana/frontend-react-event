import React, { useEffect, useState } from "react";
import { InputSingleImageProps } from "./InputSingleImage.props";
import { Container, Image, InputContainer } from "./InputSingleImage.style";
import ImageUploading, {
  ErrorsType,
  ImageListType,
} from "react-images-uploading";
import { FaImage } from "react-icons/fa6";

const SingleImageInput = (props: InputSingleImageProps): JSX.Element => {
  const { image, setImage = () => null } = props;

  const [input, setInput] = useState<ImageListType>(image ? [image] : []);

  useEffect(() => {
    setInput(image ? [image] : []);
  }, [image]);

  const onChange = async (value: ImageListType) => {
    setInput(value);
    setImage(value[0]);
  };

  const handleOnError = (error: ErrorsType) => {
    if (error?.maxNumber) {
    }

    if (error?.acceptType) {
    }

    if (error?.maxFileSize) {
    }
  };

  return (
    <>
      <ImageUploading
        value={input}
        maxFileSize={10485760}
        onChange={onChange}
        onError={handleOnError}
        dataURLKey="dataURL"
        acceptType={["jpg", "png"]}
      >
        {({ imageList, onImageUpload, onImageUpdate, dragProps }) => (
          <Container>
            {input.length === 0 && (
              <InputContainer onClick={onImageUpload} {...dragProps}>
                <FaImage size={48} color="grey" />
              </InputContainer>
            )}
            {imageList.map((image, index) => (
              <Image
                src={image.dataURL}
                onClick={() => onImageUpdate(index)}
                key={index}
              />
            ))}
          </Container>
        )}
      </ImageUploading>
    </>
  );
};

export default React.memo(SingleImageInput);
