import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import InputDate from "../../component/InputDate";
import Text from "../../component/Text";

import "../../../src/index.css";

const Component = () => {
  const [data, setDate] = useState<Date | undefined>(new Date());

  return (
    <div style={{ display: "flex", gap: "16px" }}>
      <div style={{ display: "grid", gap: "16px" }}>
        <InputDate
          label="Date"
          placeholder="Date"
          date={data}
          setDate={setDate}
          size="small"
        />
        <Text>{data?.toString()}</Text>
      </div>
      <div style={{ display: "grid", gap: "16px" }}>
        <InputDate
          label="Date"
          placeholder="Date"
          date={data}
          setDate={setDate}
        />
        <Text>{data?.toString()}</Text>
      </div>
      <div style={{ display: "grid", gap: "16px" }}>
        <InputDate
          label="Date"
          placeholder="Date"
          date={data}
          setDate={setDate}
          size="large"
        />
        <Text>{data?.toString()}</Text>
      </div>
    </div>
  );
};

const meta: Meta<typeof InputDate> = {
  title: "Component/InputDate",
  component: Component,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
