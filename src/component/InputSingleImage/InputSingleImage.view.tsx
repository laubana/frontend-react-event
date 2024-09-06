import React, { useEffect, useState } from "react";
import { FaImage } from "react-icons/fa6";
import ImageUploading, {
  ErrorsType,
  ImageType,
  ImageListType,
} from "react-images-uploading";

import { InputSingleImageProps } from "./InputSingleImage.props";
import {
  Container,
  ErrorContainer,
  LabelContainer,
  Image,
  Input,
  InputContainer,
  Item,
} from "./InputSingleImage.style";

import Text from "../Text";

const InputSingleImageComponent = (
  props: InputSingleImageProps
): JSX.Element => {
  const { error, image, label, setImage, sizing = "medium", style } = props;

  const [inputImages, setInputImages] = useState<ImageListType>([]);

  const handleChange = (values: ImageListType) => {
    setInputImages(values);
    setImage(values[0]);
  };

  const handleError = (error: ErrorsType) => {
    if (error?.maxNumber) {
    }

    if (error?.acceptType) {
    }

    if (error?.maxFileSize) {
    }
  };

  useEffect(() => {
    if (typeof image === "object") {
      setInputImages([image]);
    }
  }, [image]);

  return (
    <Container>
      {label && (
        <LabelContainer sizing={sizing}>
          <Text>{label}</Text>
        </LabelContainer>
      )}
      <InputContainer>
        <ImageUploading
          value={inputImages}
          maxFileSize={10485760}
          onChange={handleChange}
          onError={handleError}
          dataURLKey="dataURL"
          acceptType={["jpg", "png"]}
        >
          {({ dragProps, onImageUpload }) => (
            <>
              {!image && inputImages.length === 0 && (
                <Input onClick={onImageUpload} {...dragProps} style={style}>
                  <FaImage size={48} color="grey" />
                </Input>
              )}
              {typeof image === "string" && inputImages.length === 0 && (
                <Item onClick={() => onImageUpload()}>
                  <Image src={image?.toString()} style={style} />
                </Item>
              )}
              {inputImages.map((image, index) => (
                <Item onClick={() => onImageUpload()} key={index}>
                  <Image src={image.dataURL} style={style} />
                </Item>
              ))}
            </>
          )}
        </ImageUploading>
      </InputContainer>
      {error && (
        <ErrorContainer sizing={sizing}>
          <Text coloring="red">{error}</Text>
        </ErrorContainer>
      )}
    </Container>
  );
};

export default React.memo(InputSingleImageComponent);
