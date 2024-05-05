import type { Meta, StoryObj } from "@storybook/react";
import Carousel from "../../component/Carousel";

import "../../../src/index.css";

const Component = () => {
  const images = [];
  for (let i = 0; i < 5; i++) {
    images.push(
      <img
        src={`https://picsum.photos/360?random=${i + 1}`}
        style={{
          width: "100%",
          height: "100%",
          borderRadius: "8px",
          objectFit: "cover",
        }}
      />
    );
  }

  return (
    <div style={{ width: "100%", aspectRatio: 2 }}>
      <Carousel items={images} />
    </div>
  );
};

const meta: Meta<typeof Carousel> = {
  title: "Component/Carousel",
  component: Component,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
