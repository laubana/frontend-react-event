import type { Meta, StoryObj } from "@storybook/react";
import Button from "../../component/Button";

const meta: Meta<typeof Button> = {
  title: "Component/Button",
  component: () => {
    return (
      <div>
        <Button sizing="small" onClick={() => null}>
          Button
        </Button>
        <Button>Button</Button>
        <Button sizing="large">Button</Button>
        <Button sizing="small" color="black">
          Button
        </Button>
        <Button color="black">Button</Button>
        <Button sizing="large" color="black">
          Button
        </Button>
        <Button sizing="small" color="white">
          Button
        </Button>
        <Button color="white">Button</Button>
        <Button sizing="large" color="white">
          Button
        </Button>
        <Button sizing="small" color="transparent">
          Button
        </Button>
        <Button color="transparent">Button</Button>
        <Button sizing="large" color="transparent">
          Button
        </Button>
      </div>
    );
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
