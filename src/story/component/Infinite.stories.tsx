import { useEffect, useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Infinite from "../../component/Infinite";

import "../../../src/index.css";

const Component = () => {
  const [items, setItems] = useState<any[]>([]);
  const [hasMore, setHasMore] = useState<boolean>(true);

  const handleScroll = () => {
    if (50 < items.length) {
      setHasMore(false);
    } else {
      setItems((oldValues) => [
        ...oldValues,
        <div key={items.length}>{items.length}</div>,
      ]);
    }
  };

  useEffect(() => {
    for (let i = 0; i < 30; i++) {
      setItems((oldValues) => [...oldValues, <div key={i}>{i}</div>]);
    }
  }, []);

  return (
    <div style={{ width: "100%" }}>
      <Infinite
        columns={1}
        items={items}
        onScroll={handleScroll}
        hasMore={hasMore}
      />
    </div>
  );
};

const meta: Meta<typeof Infinite> = {
  title: "Component/Infinite",
  component: Component,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
