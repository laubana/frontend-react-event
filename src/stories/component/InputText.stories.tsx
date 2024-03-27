import type { Meta, StoryObj } from "@storybook/react";
import InputText from "../../component/InputText";
import { useState } from "react";
import Text from "../../component/Text";

const Component = () => {
  const [text, setText] = useState<string>("");

  return (
    <div style={{ display: "flex", gap: "16px" }}>
      <div>
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
      <div>
        <InputText
          placeholder="Text"
          text={text}
          setText={(text: string) => setText(text)}
        />
        <InputText text={text} setText={(text: string) => setText(text)} />
        <Text>{text}</Text>
      </div>
      <div>
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
