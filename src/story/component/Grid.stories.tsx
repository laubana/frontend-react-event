import type { Meta, StoryObj } from "@storybook/react";
import Grid from "../../component/Grid";

import "../../../src/index.css";

const Component = () => {
  return (
    <div style={{ width: "100%" }}>
      <Grid columns={2}>
        <div style={{ backgroundColor: "lightgreen" }}>1</div>
        <div style={{ backgroundColor: "pink" }}>2</div>
      </Grid>
    </div>
  );
};

const meta: Meta<typeof Grid> = {
  title: "Component/Grid",
  component: Component,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
