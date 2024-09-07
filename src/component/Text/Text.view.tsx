import React from "react";

import { TextProps } from "./Text.props";
import { Text } from "./Text.style";

const TextComponent = ({
  alignment = "left",
  children,
  color = "black",
  size = "medium",
  style,
}: TextProps): JSX.Element => {
  return (
    <Text sizing={size} coloring={color} alignment={alignment} style={style}>
      {children}
    </Text>
  );
};

export default React.memo(TextComponent);
