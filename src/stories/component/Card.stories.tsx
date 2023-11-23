import type { Meta, StoryObj } from "@storybook/react";
import Card from "../../component/Card";

const Component = () => {
  return (
    <div style={{ display: "flex", gap: "16px" }}>
      <Card image="https://picsum.photos/100/100?random=1" title="Lorem" />
      <Card image="https://picsum.photos/200/300?random=2" title="Ipsum" />
      <Card image="https://picsum.photos/200/300?random=3" title="Dolor" />
      <Card image="https://picsum.photos/200/300?random=4" title="Sit" />
      <Card image="https://picsum.photos/200/300?random=5" title="Amet" />
    </div>
  );
};

const meta: Meta<typeof Card> = {
  title: "Component/Card",
  component: Component,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
