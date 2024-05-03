import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import InputTextArea from "../../component/InputTextArea";
import Text from "../../component/Text";

const Component = () => {
  const [text, setText] = useState<string>("");

  return (
    <div style={{ display: "flex", gap: "16px" }}>
      <div style={{ display: "grid", gap: "16px" }}>
        <InputTextArea
          sizing="small"
          placeholder="TextArea"
          text={text}
          setText={(text: string) => setText(text)}
        />
        <InputTextArea
          sizing="small"
          text={text}
          setText={(text: string) => setText(text)}
        />
        <Text>{text}</Text>
      </div>
      <div style={{ display: "grid", gap: "16px" }}>
        <InputTextArea
          placeholder="TextArea"
          text={text}
          setText={(text: string) => setText(text)}
        />
        <InputTextArea text={text} setText={(text: string) => setText(text)} />
        <Text>{text}</Text>
      </div>
      <div style={{ display: "grid", gap: "16px" }}>
        <InputTextArea
          sizing="large"
          placeholder="TextArea"
          text={text}
          setText={(text: string) => setText(text)}
        />
        <InputTextArea
          sizing="large"
          text={text}
          setText={(text: string) => setText(text)}
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
