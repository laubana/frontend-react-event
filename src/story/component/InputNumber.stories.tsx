import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import InputNumber from "../../component/InputNumber";
import Text from "../../component/Text";

import "../../../src/index.css";

const Component = () => {
  const [number, setNumber] = useState<number | undefined>(undefined);

  return (
    <div style={{ display: "flex", gap: "16px" }}>
      <div style={{ display: "grid", gap: "16px" }}>
        <InputNumber
          label="Number"
          placeholder="Number"
          number={number}
          setNumber={(number: number | undefined) => setNumber(number)}
          sizing="small"
        />
        <InputNumber
          label="Number"
          number={number}
          setNumber={(number: number | undefined) => setNumber(number)}
          sizing="small"
        />
        <Text>{number}</Text>
      </div>
      <div style={{ display: "grid", gap: "16px" }}>
        <InputNumber
          label="Number"
          placeholder="Number"
          number={number}
          setNumber={(number: number | undefined) => setNumber(number)}
          sizing="medium"
        />
        <InputNumber
          label="Number"
          number={number}
          setNumber={(number: number | undefined) => setNumber(number)}
          sizing="medium"
        />
        <Text>{number}</Text>
      </div>
      <div style={{ display: "grid", gap: "16px" }}>
        <InputNumber
          label="Number"
          placeholder="Number"
          number={number}
          setNumber={(number: number | undefined) => setNumber(number)}
          sizing="large"
        />
        <InputNumber
          label="Number"
          number={number}
          setNumber={(number: number | undefined) => setNumber(number)}
          sizing="large"
        />
        <Text>{number}</Text>
      </div>
    </div>
  );
};

const meta: Meta<typeof InputNumber> = {
  title: "Component/InputNumber",
  component: Component,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
