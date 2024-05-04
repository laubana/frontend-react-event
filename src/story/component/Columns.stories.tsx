import type { Meta, StoryObj } from "@storybook/react";
import Columns from "../../component/Columns";

import "../../../src/index.css";

const Component = () => {
  return (
    <div style={{ width: "100%" }}>
      <Columns columns="1 2" style={{ justifyItems: "stretch" }}>
        <div style={{ backgroundColor: "lightgreen" }}>1</div>
        <div style={{ backgroundColor: "pink" }}>2</div>
      </Columns>
    </div>
  );
};

const meta: Meta<typeof Columns> = {
  title: "Component/Columns",
  component: Component,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
