import type { Meta, StoryObj } from "@storybook/react";
import InputPassword from "../../component/InputPassword";
import { useState } from "react";
import Text from "../../component/Text";

const Component = () => {
  const [password, setPassword] = useState<string>("");

  return (
    <div style={{ display: "flex", gap: "16px" }}>
      <div>
        <InputPassword
          sizing="small"
          placeholder="Password"
          text={password}
          setText={(text: string) => setPassword(text)}
        />
        <InputPassword
          sizing="small"
          text={password}
          setText={(text: string) => setPassword(text)}
        />
        <Text>{password}</Text>
      </div>
      <div>
        <InputPassword
          placeholder="Password"
          text={password}
          setText={(text: string) => setPassword(text)}
        />
        <InputPassword
          text={password}
          setText={(text: string) => setPassword(text)}
        />
        <Text>{password}</Text>
      </div>
      <div>
        <InputPassword
          sizing="large"
          placeholder="Password"
          text={password}
          setText={(text: string) => setPassword(text)}
        />
        <InputPassword
          sizing="large"
          text={password}
          setText={(text: string) => setPassword(text)}
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
