import type { Meta, StoryObj } from "@storybook/react";
import Avatar from "../../component/Avatar";

import "../../../src/index.css";
import Comment from "../../module/Comment";

const Component = () => {
  return (
    <div style={{ display: "flex", gap: "16px" }}>
      <div style={{ display: "grid", gap: "64px" }}>
        <Comment imageUrl="https://picsum.photos/360" content="test" />
      </div>
    </div>
  );
};

const meta: Meta<typeof Avatar> = {
  title: "module/Comment",
  component: Component,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
