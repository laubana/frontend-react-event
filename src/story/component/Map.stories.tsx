import type { Meta, StoryObj } from "@storybook/react";
import Map from "../../component/Map";

import "../../../src/index.css";

const Component = () => {
  const items = [
    { latitude: 49.225, longitude: -123.1076 },
    { latitude: 49.215, longitude: -123.09 },
  ];

  return (
    <div style={{ width: "100%", aspectRatio: 2 }}>
      <Map
        location={{ latitude: 49.225, longitude: -123.1076 }}
        markers={items.map((itemMapItem) => ({
          latitude: itemMapItem.latitude,
          longitude: itemMapItem.longitude,
        }))}
        popups={items.map((_, locationMapIndex) => (
          <div>
            <img
              src={`https://picsum.photos/360?random=${locationMapIndex}`}
              style={{ width: "100%" }}
            />
          </div>
        ))}
      />
    </div>
  );
};

const meta: Meta<typeof Map> = {
  title: "Component/Map",
  component: Component,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
