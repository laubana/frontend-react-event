import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import InputText from "../../component/InputText";
import Text from "../../component/Text";

const Component = () => {
  const [text, setText] = useState<string>("");

  return (
    <div style={{ display: "flex", gap: "16px" }}>
      <div style={{ display: "grid", gap: "16px" }}>
        <InputText
          sizing="small"
          placeholder="Text"
          text={text}
          setText={(text: string) => setText(text)}
        />
        <InputText
          sizing="small"
          text={text}
          setText={(text: string) => setText(text)}
        />
        <Text>{text}</Text>
      </div>
      <div style={{ display: "grid", gap: "16px" }}>
        <InputText
          placeholder="Text"
          text={text}
          setText={(text: string) => setText(text)}
        />
        <InputText text={text} setText={(text: string) => setText(text)} />
        <Text>{text}</Text>
      </div>
      <div style={{ display: "grid", gap: "16px" }}>
        <InputText
          sizing="large"
          placeholder="Text"
          text={text}
          setText={(text: string) => setText(text)}
        />
        <InputText
          sizing="large"
          text={text}
          setText={(text: string) => setText(text)}
        />
        <Text>{text}</Text>
      </div>
    </div>
  );
};

const meta: Meta<typeof InputText> = {
  title: "Component/InputText",
  component: Component,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
