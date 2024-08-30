import React from "react";
import { TextProps } from "./Text.props";
import { Text } from "./Text.style";

const TextComponent = ({
  alignment = "left",
  children,
  coloring = "black",
  sizing = "medium",
  style,
}: TextProps): JSX.Element => {
  return (
    <Text
      sizing={sizing}
      coloring={coloring}
      alignment={alignment}
      style={style}
    >
      {children}
    </Text>
  );
};

export default React.memo(TextComponent);
