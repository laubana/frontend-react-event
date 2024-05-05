import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { ImageType } from "react-images-uploading";
import InputMultipleImage from "../../component/InputMultipleImage";

import "../../../src/index.css";

const Component = () => {
  const [images, setImages] = useState<ImageType[]>([]);

  return (
    <div style={{ width: "100%" }}>
      <InputMultipleImage images={images} setImages={setImages} />
    </div>
  );
};

const meta: Meta<typeof InputMultipleImage> = {
  title: "Component/InputMultipleImage",
  component: Component,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
