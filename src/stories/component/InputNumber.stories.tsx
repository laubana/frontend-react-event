import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import InputNumber from "../../component/InputNumber";
import Text from "../../component/Text";

const Component = () => {
  const [number, setNumber] = useState<number | undefined>(undefined);

  return (
    <div style={{ display: "flex", gap: "16px" }}>
      <div style={{ display: "grid", gap: "16px" }}>
        <InputNumber
          sizing="small"
          placeholder="Number"
          number={number}
          setNumber={(number: number | undefined) => setNumber(number)}
        />
        <InputNumber
          sizing="small"
          number={number}
          setNumber={(number: number | undefined) => setNumber(number)}
        />
        <Text>{number}</Text>
      </div>
      <div style={{ display: "grid", gap: "16px" }}>
        <InputNumber
          sizing="medium"
          placeholder="Number"
          number={number}
          setNumber={(number: number | undefined) => setNumber(number)}
        />
        <InputNumber
          sizing="medium"
          number={number}
          setNumber={(number: number | undefined) => setNumber(number)}
        />
        <Text>{number}</Text>
      </div>
      <div style={{ display: "grid", gap: "16px" }}>
        <InputNumber
          sizing="large"
          placeholder="Number"
          number={number}
          setNumber={(number: number | undefined) => setNumber(number)}
        />
        <InputNumber
          sizing="large"
          number={number}
          setNumber={(number: number | undefined) => setNumber(number)}
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
