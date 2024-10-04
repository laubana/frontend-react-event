import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";

import InputTime from "../../component/InputTime";
import Text from "../../component/Text";
import { convertDateTime } from "../../helpers/date";

import "../../../src/index.css";

const Component = () => {
  const [time, setTime] = useState<Date | null>(new Date());

  return (
    <div style={{ display: "flex", gap: "16px" }}>
      <div style={{ display: "grid", gap: "16px" }}>
        <InputTime label="Date" placeholder="Date" />
        <Text>{convertDateTime(time)}</Text>
      </div>
      <div style={{ display: "grid", gap: "16px" }}>
        <InputTime
          label="Time"
          placeholder="Time"
          time={time}
          setTime={setTime}
          size="small"
        />
        <Text>{convertDateTime(time)}</Text>
      </div>
      <div style={{ display: "grid", gap: "16px" }}>
        <InputTime
          label="Time"
          placeholder="Time"
          time={time}
          setTime={setTime}
        />
        <Text>{convertDateTime(time)}</Text>
      </div>
      <div style={{ display: "grid", gap: "16px" }}>
        <InputTime
          label="Time"
          placeholder="Time"
          time={time}
          setTime={setTime}
          size="large"
        />
        <Text>{convertDateTime(time)}</Text>
      </div>
    </div>
  );
};

const meta: Meta<typeof InputTime> = {
  title: "Component/InputTime",
  component: Component,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
