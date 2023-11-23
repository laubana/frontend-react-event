import type { Meta, StoryObj } from "@storybook/react";
import InputNumber from "../../component/InputNumber";
import { useState } from "react";
import Text from "../../component/Text";

const Component = () => {
  const [number, setNumber] = useState<string>("");

  return (
    <div style={{ display: "flex", gap: "16px" }}>
      <div>
        <InputNumber
          sizing="small"
          placeholder="Number"
          number={number}
          setNumber={(number: string) => setNumber(number)}
        />
        <InputNumber
          sizing="small"
          number={number}
          setNumber={(number: string) => setNumber(number)}
        />
        <Text>{number}</Text>
      </div>
      <div>
        <InputNumber
          sizing="medium"
          placeholder="Number"
          number={number}
          setNumber={(number: string) => setNumber(number)}
        />
        <InputNumber
          sizing="medium"
          number={number}
          setNumber={(number: string) => setNumber(number)}
        />
        <Text>{number}</Text>
      </div>
      <div>
        <InputNumber
          sizing="large"
          placeholder="Number"
          number={number}
          setNumber={(number: string) => setNumber(number)}
        />
        <InputNumber
          sizing="large"
          number={number}
          setNumber={(number: string) => setNumber(number)}
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
