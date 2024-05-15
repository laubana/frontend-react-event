import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import Modal from "../../component/Modal";

import "../../../src/index.css";
import Button from "../../component/Button";

const Component = () => {
  const [isVisibile, setIsVisibile] = useState<boolean>(false);

  const handleOpen = () => {
    setIsVisibile(true);
  };

  const handleClose = () => {
    setIsVisibile(false);
  };

  return (
    <div>
      <Button onClick={handleOpen}>Open</Button>
      <Modal isVisibile={isVisibile} onClose={handleClose}>
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
