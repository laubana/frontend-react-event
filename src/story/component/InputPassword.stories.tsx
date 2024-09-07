import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import InputPassword from "../../component/InputPassword";
import Text from "../../component/Text";

import "../../../src/index.css";

const Component = () => {
  const [password, setPassword] = useState<string>("");

  return (
    <div style={{ display: "flex", gap: "16px" }}>
      <div style={{ display: "grid", gap: "16px" }}>
        <InputPassword
          size="small"
          placeholder="Password"
          password={password}
          setPassword={(text: string) => setPassword(text)}
        />
        <InputPassword
          size="small"
          password={password}
          setPassword={(text: string) => setPassword(text)}
        />
        <Text>{password}</Text>
      </div>
      <div style={{ display: "grid", gap: "16px" }}>
        <InputPassword
          placeholder="Password"
          password={password}
          setPassword={(text: string) => setPassword(text)}
        />
        <InputPassword
          password={password}
          setPassword={(text: string) => setPassword(text)}
        />
        <Text>{password}</Text>
      </div>
      <div style={{ display: "grid", gap: "16px" }}>
        <InputPassword
          size="large"
          placeholder="Password"
          password={password}
          setPassword={(text: string) => setPassword(text)}
        />
        <InputPassword
          size="large"
          password={password}
          setPassword={(text: string) => setPassword(text)}
        />
        <Text>{password}</Text>
      </div>
    </div>
  );
};

const meta: Meta<typeof InputPassword> = {
  title: "Component/InputPassword",
  component: Component,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
