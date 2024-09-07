import type { Meta, StoryObj } from "@storybook/react";
import Avatar from "../../component/Avatar";

import "../../../src/index.css";

const Component = () => {
  return (
    <div style={{ display: "flex", gap: "16px" }}>
      <div style={{ display: "grid", gap: "64px" }}>
        <Avatar imageUrl="https://picsum.photos/100" />
        <Avatar imageUrl="https://picsum.photos/100" color="red" />
      </div>
    </div>
  );
};

const meta: Meta<typeof Avatar> = {
  title: "Component/Avatar",
  component: Component,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
