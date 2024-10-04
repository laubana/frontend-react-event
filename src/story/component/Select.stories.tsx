import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Option } from "../../type/Option";
import Select from "../../component/Select";
import Text from "../../component/Text";

import "../../../src/index.css";

const Component = () => {
  const options: Option[] = [
    { label: "Apple", value: "apple" },
    { label: "Banana", value: "banana" },
    { label: "Carrot", value: "carrot" },
  ];

  const [option, setOption] = useState<Option | null>(null);

  return (
    <div style={{ display: "flex", gap: "16px" }}>
      <div style={{ display: "grid", gap: "16px" }}>
        <Select
          options={options}
          placeholder="Fruits"
          setOption={(option) => setOption(option)}
          size="small"
        />
        <Select
          options={options}
          setOption={(option) => setOption(option)}
          size="small"
        />
        <Text>{option?.value}</Text>
      </div>
      <div style={{ display: "grid", gap: "16px" }}>
        <Select
          options={options}
          placeholder="Fruits"
          setOption={(option) => setOption(option)}
        />
        <Select options={options} setOption={(option) => setOption(option)} />
        <Text>{option?.value}</Text>
      </div>
      <div style={{ display: "grid", gap: "16px" }}>
        <Select
          size="large"
          options={options}
          placeholder="Fruits"
          setOption={(option) => setOption(option)}
        />
        <Select
          size="large"
          options={options}
          setOption={(option) => setOption(option)}
        />
        <Text>{option?.value}</Text>
      </div>
    </div>
  );
};

const meta: Meta<typeof Select> = {
  title: "Component/Select",
  component: Component,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
