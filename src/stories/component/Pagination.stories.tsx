import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import Pagination from "../../component/Pagination";

const Component = () => {
  const items = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35,
  ];

  const [pagedItems, setPagedItems] = useState<any[]>([]);

  return (
    <div style={{ display: "flex", gap: "16px" }}>
      <div style={{ display: "grid", gap: "64px" }}>
        <div>
          {pagedItems.map((pagedItem, pagedItemIndex) => (
            <div key={pagedItemIndex}>{pagedItem}</div>
          ))}
        </div>
        <Pagination
          items={items}
          groupItemNumber={3}
          onClick={(items) => setPagedItems(items)}
        />
      </div>
    </div>
  );
};

const meta: Meta<typeof Pagination> = {
  title: "Component/Pagination",
  component: Component,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
