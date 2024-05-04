import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import InputTextArea from "../../component/InputTextArea";
import Text from "../../component/Text";

import "../../../src/index.css";

const Component = () => {
  const [text, setText] = useState<string>("");

  return (
    <div style={{ display: "flex", gap: "16px" }}>
      <div style={{ display: "grid", gap: "16px" }}>
        <InputTextArea
          label="TextArea"
          placeholder="TextArea"
          text={text}
          setText={(text: string) => setText(text)}
          sizing="small"
        />
        <InputTextArea
          label="TextArea"
          text={text}
          setText={(text: string) => setText(text)}
          sizing="small"
        />
        <Text>{text}</Text>
      </div>
      <div style={{ display: "grid", gap: "16px" }}>
        <InputTextArea
          label="TextArea"
          placeholder="TextArea"
          text={text}
          setText={(text: string) => setText(text)}
        />
        <InputTextArea
          label="TextArea"
          text={text}
          setText={(text: string) => setText(text)}
        />
        <Text>{text}</Text>
      </div>
      <div style={{ display: "grid", gap: "16px" }}>
        <InputTextArea
          label="TextArea"
          placeholder="TextArea"
          text={text}
          setText={(text: string) => setText(text)}
          sizing="large"
        />
        <InputTextArea
          label="TextArea"
          text={text}
          setText={(text: string) => setText(text)}
          sizing="large"
        />
        <Text>{text}</Text>
      </div>
    </div>
  );
};

const meta: Meta<typeof InputTextArea> = {
  title: "Component/InputTextArea",
  component: Component,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
