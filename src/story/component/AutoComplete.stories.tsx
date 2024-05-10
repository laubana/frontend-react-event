import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Option } from "../../type/Option";
import AutoComplete from "../../component/AutoComplete";
import Text from "../../component/Text";

import "../../../src/index.css";

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
        <AutoComplete
          label="Fruits"
          placeholder="Frults"
          options={options}
          option={option}
          setOption={(option: Option | undefined) => setOption(option)}
          sizing="small"
        />
        <AutoComplete
          label="Fruits"
          options={options}
          option={option}
          setOption={(option: Option | undefined) => setOption(option)}
          sizing="small"
        />
        <Text>{option?.value}</Text>
      </div>
      <div style={{ display: "grid", gap: "16px" }}>
        <AutoComplete
          label="Fruits"
          placeholder="Frults"
          options={options}
          option={option}
          setOption={(option: Option | undefined) => setOption(option)}
        />
        <AutoComplete
          label="Fruits"
          options={options}
          option={option}
          setOption={(option: Option | undefined) => setOption(option)}
        />
        <Text>{option?.value}</Text>
      </div>
      <div style={{ display: "grid", gap: "16px" }}>
        <AutoComplete
          label="Fruits"
          placeholder="Frults"
          options={options}
          option={option}
          setOption={(option: Option | undefined) => setOption(option)}
          sizing="large"
        />
        <AutoComplete
          label="Fruits"
          options={options}
          setOption={(option: Option | undefined) => setOption(option)}
          sizing="large"
        />
        <Text>{option?.value}</Text>
      </div>
    </div>
  );
};

const meta: Meta<typeof AutoComplete> = {
  title: "Component/AutoComplete",
  component: Component,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
