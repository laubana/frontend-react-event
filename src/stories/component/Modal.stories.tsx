import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import Modal from "../../component/Modal";

const Component = () => {
  const [visibility, setVisibility] = useState<boolean>(true);

  const handleClose = () => {
    setVisibility(false);
  };

  return (
    <div>
      <Modal visibility={visibility} onClose={handleClose}>
        Test
      </Modal>
    </div>
  );
};

const meta: Meta<typeof Modal> = {
  title: "Component/Modal",
  component: Component,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
