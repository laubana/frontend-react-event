import React from "react";
import { TextProps } from "./Text.props";
import { Text } from "./Text.style";

const TextComponent = ({
  sizing = "medium",
  coloring = "black",
  alignment = "left",
  children,
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
