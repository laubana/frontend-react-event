import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Option } from "../../type/Option";
import Select from "../../component/Select";
import Text from "../../component/Text";

const Component = () => {
  const options: Option[] = [
    { label: "Apple", value: "apple" },
    { label: "Banana", value: "banana" },
    { label: "Carrot", value: "carrot" },
  ];

  const [option, setOption] = useState<Option | undefined>(undefined);

  return (
    <div style={{ display: "flex", gap: "16px" }}>
      <div style={{ display: "grid", gap: "16px" }}>
        <Select
          sizing="small"
          options={options}
          setOption={(option: Option | undefined) => setOption(option)}
        />
        <Select
          sizing="small"
          options={options}
          setOption={(option: Option | undefined) => setOption(option)}
        />
        <Text>{option?.value}</Text>
      </div>
      <div style={{ display: "grid", gap: "16px" }}>
        <Select
          options={options}
          setOption={(option: Option | undefined) => setOption(option)}
        />
        <Select
          options={options}
          setOption={(option: Option | undefined) => setOption(option)}
        />
        <Text>{option?.value}</Text>
      </div>
      <div style={{ display: "grid", gap: "16px" }}>
        <Select
          sizing="large"
          options={options}
          setOption={(option: Option | undefined) => setOption(option)}
        />
        <Select
          sizing="large"
          options={options}
          setOption={(option: Option | undefined) => setOption(option)}
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
