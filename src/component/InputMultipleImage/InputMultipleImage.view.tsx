import React, { useState } from "react";
import ImageUploading, {
  ErrorsType,
  ImageListType,
} from "react-images-uploading";
import { FaImages } from "react-icons/fa6";
import { InputMultipleImageProps } from "./InputMultipleImage.props";
import {
  Container,
  LabelContainer,
  InputContainer,
  Input,
  Item,
  Image,
  ErrorContainer,
} from "./InputMultipleImage.style";
import Text from "../Text";

const InputMultipleImageComponent = (
  props: InputMultipleImageProps
): JSX.Element => {
  const { label, images, setImages, error, sizing = "medium" } = props;

  const [inputValues, setInputValues] = useState<ImageListType>(
    images ? images : []
  );

  // useEffect(() => {
  //   setInputValues(images ? images : []);
  // }, [images]);

  const handleChange = (values: ImageListType) => {
    setInputValues(values);
    setImages(values);
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
          <Text size={sizing}>{label}</Text>
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
          multiple
        >
          {({ imageList, onImageUpload, onImageRemove, dragProps }) => (
            <>
              {inputValues.length === 0 ? (
                <Input
                  onClick={onImageUpload}
                  {...dragProps}
                  style={{ aspectRatio: 2, gridColumn: "1 / -1" }}
                >
                  <FaImages size={48} color="grey" />
                </Input>
              ) : (
                <Input
                  onClick={onImageUpload}
                  {...dragProps}
                  style={{ aspectRatio: 1 }}
                >
                  <FaImages size={48} color="grey" />
                </Input>
              )}
              {imageList.map((image, index) => (
                <Item onClick={() => onImageRemove(index)} key={index}>
                  <Image src={image.dataURL} />
                </Item>
              ))}
            </>
          )}
        </ImageUploading>
      </InputContainer>
      {error && (
        <ErrorContainer sizing={sizing}>
          <Text size={sizing} color="red">
            {error}
          </Text>
        </ErrorContainer>
      )}
    </Container>
  );
};

export default React.memo(InputMultipleImageComponent);
