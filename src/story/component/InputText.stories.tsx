import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import InputText from "../../component/InputText";
import Text from "../../component/Text";

import "../../../src/index.css";

const Component = () => {
  const [text, setText] = useState<string>("");

  return (
    <div style={{ display: "flex", gap: "16px" }}>
      <div style={{ display: "grid", gap: "16px" }}>
        <InputText
          label="Text"
          placeholder="Text"
          text={text}
          setText={(text: string) => setText(text)}
          size="small"
        />
        <InputText
          label="Text"
          text={text}
          setText={(text: string) => setText(text)}
          size="small"
        />
        <Text>{text}</Text>
      </div>
      <div style={{ display: "grid", gap: "16px" }}>
        <InputText
          label="Text"
          placeholder="Text"
          text={text}
          setText={(text: string) => setText(text)}
        />
        <InputText
          label="Text"
          text={text}
          setText={(text: string) => setText(text)}
        />
        <Text>{text}</Text>
      </div>
      <div style={{ display: "grid", gap: "16px" }}>
        <InputText
          label="Text"
          placeholder="Text"
          text={text}
          setText={(text: string) => setText(text)}
          size="large"
        />
        <InputText
          label="Text"
          text={text}
          setText={(text: string) => setText(text)}
          size="large"
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
