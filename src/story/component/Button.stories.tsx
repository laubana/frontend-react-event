import type { Meta, StoryObj } from "@storybook/react";
import Button from "../../component/Button";

import "../../../src/index.css";

const Component = () => {
  return (
    <div>
      <Button sizing="small" onClick={() => null}>
        Button
      </Button>
      <Button>Button</Button>
      <Button sizing="large">Button</Button>
      <Button sizing="small" coloring="black">
        Button
      </Button>
      <Button coloring="black">Button</Button>
      <Button sizing="large" coloring="black">
        Button
      </Button>
      <Button sizing="small" coloring="white">
        Button
      </Button>
      <Button coloring="white">Button</Button>
      <Button sizing="large" coloring="white">
        Button
      </Button>
      <Button sizing="small" coloring="transparent">
        Button
      </Button>
      <Button coloring="transparent">Button</Button>
      <Button sizing="large" coloring="transparent">
        Button
      </Button>
    </div>
  );
};

const meta: Meta<typeof Button> = {
  title: "Component/Button",
  component: Component,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
