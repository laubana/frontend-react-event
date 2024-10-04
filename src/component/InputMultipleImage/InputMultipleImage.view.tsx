import React, { useState } from "react";
import ImageUploading, {
  ErrorsType,
  ImageListType,
} from "react-images-uploading";
import { FaImages } from "react-icons/fa6";

import { InputMultipleImageProps } from "./InputMultipleImage.props";
import { Wrapper, Input, Item, Image } from "./InputMultipleImage.style";

import InputBase from "../InputBase";

const InputMultipleImageComponent = (
  props: InputMultipleImageProps
): JSX.Element => {
  const { error, images, label, setImages, size = "medium" } = props;

  const [inputValues, setInputValues] = useState<ImageListType>(
    images ? images : []
  );

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
    <InputBase error={error} label={label} size={size}>
      <Wrapper>
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
      </Wrapper>
    </InputBase>
  );
};

export default React.memo(InputMultipleImageComponent);
