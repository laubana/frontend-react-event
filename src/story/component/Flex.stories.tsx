import type { Meta, StoryObj } from "@storybook/react";
import Flex from "../../component/Flex";

import "../../../src/index.css";

const Component = () => {
  return (
    <div style={{ width: "100%" }}>
      <Flex>
        <div style={{ backgroundColor: "lightgreen" }}>1</div>
        <div style={{ backgroundColor: "pink" }}>2</div>
      </Flex>
    </div>
  );
};

const meta: Meta<typeof Flex> = {
  title: "Component/Flex",
  component: Component,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
