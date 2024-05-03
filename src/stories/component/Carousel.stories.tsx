import type { Meta, StoryObj } from "@storybook/react";
import Carousel from "../../component/Carousel";

const Component = () => {
  const images = [
    <img
      src="https://picsum.photos/360?random=1"
      style={{ width: "100%", height: "100%", objectFit: "cover" }}
    />,
    <img
      src="https://picsum.photos/360?random=2"
      style={{ width: "100%", height: "100%", objectFit: "cover" }}
    />,
    <img
      src="https://picsum.photos/360?random=3"
      style={{ width: "100%", height: "100%", objectFit: "cover" }}
    />,
    <img
      src="https://picsum.photos/360?random=4"
      style={{ width: "100%", height: "100%", objectFit: "cover" }}
    />,
    <img
      src="https://picsum.photos/360?random=5"
      style={{ width: "100%", height: "100%", objectFit: "cover" }}
    />,
  ];

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
