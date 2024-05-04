import type { Meta, StoryObj } from "@storybook/react";
import Button from "../../component/Button";

import "../../../src/index.css";

const Component = () => {
  return (
    <div>
      <Button size="small" onClick={() => null}>
        Button
      </Button>
      <Button>Button</Button>
      <Button size="large">Button</Button>
      <Button size="small" color="black">
        Button
      </Button>
      <Button color="black">Button</Button>
      <Button size="large" color="black">
        Button
      </Button>
      <Button size="small" color="white">
        Button
      </Button>
      <Button color="white">Button</Button>
      <Button size="large" color="white">
        Button
      </Button>
      <Button size="small" color="transparent">
        Button
      </Button>
      <Button color="transparent">Button</Button>
      <Button size="large" color="transparent">
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
