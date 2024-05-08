import React, { useState } from "react";
import ImageUploading, {
  ErrorsType,
  ImageListType,
} from "react-images-uploading";
import { FaImage } from "react-icons/fa6";
import { InputSingleImageProps } from "./InputSingleImage.props";
import {
  Container,
  LabelContainer,
  InputContainer,
  Input,
  Item,
  Image,
  ErrorContainer,
} from "./InputSingleImage.style";
import Text from "../Text";

const InputSingleImageComponent = (
  props: InputSingleImageProps
): JSX.Element => {
  const { label, image, setImage, error, sizing = "medium", style } = props;

  const [inputValues, setInputValues] = useState<ImageListType>(
    image ? [image] : []
  );

  const handleChange = (values: ImageListType) => {
    setInputValues(values);
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

  return (
    <Container>
      {label && (
        <LabelContainer sizing={sizing}>
          <Text>{label}</Text>
        </LabelContainer>
      )}
      <InputContainer>
        <ImageUploading
          value={inputValues}
          maxFileSize={10485760}
          onChange={handleChange}
          onError={handleError}
          dataURLKey="dataURL"
          acceptType={["jpg", "png"]}
        >
          {({ imageList, onImageUpload, onImageUpdate, dragProps }) => (
            <>
              {inputValues.length === 0 && (
                <Input onClick={onImageUpload} {...dragProps} style={style}>
                  <FaImage size={48} color="grey" />
                </Input>
              )}
              {imageList.map((image, index) => (
                <Item onClick={() => onImageUpdate(index)} key={index}>
                  <Image src={image.dataURL} />
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
