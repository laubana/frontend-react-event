import React from "react";
import { TextProps } from "./Text.props";
import { Text } from "./Text.style";

const TextComponent = ({
  sizing = "medium",
  coloring = "black",
  children,
  style,
}: TextProps): JSX.Element => {
  return (
    <Text sizing={sizing} coloring={coloring} style={style}>
      {children}
    </Text>
  );
};

export default React.memo(TextComponent);
