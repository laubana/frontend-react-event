import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { ImageType } from "react-images-uploading";
import InputSingleImage from "../../component/InputSingleImage";

const Component = () => {
  const [image, setImage] = useState<ImageType | undefined>(undefined);

  return (
    <div style={{ display: "flex", gap: "16px" }}>
      <div style={{ display: "grid", gap: "16px", width: "30%" }}>
        <InputSingleImage image={image} setImage={setImage} />
      </div>
    </div>
  );
};

const meta: Meta<typeof InputSingleImage> = {
  title: "Component/InputSingleImage",
  component: Component,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
