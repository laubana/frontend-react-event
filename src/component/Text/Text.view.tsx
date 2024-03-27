import React from "react";
import { TextProps } from "./Text.props";
import { Text } from "./Text.style";

const TextComponent = ({
  type = "paragraph",
  sizing = "medium",
  color = "black",
  children,
  style,
}: TextProps): JSX.Element => {
  return (
    <Text type={type} sizing={sizing} color={color} style={style}>
      {children}
    </Text>
  );
};

export default React.memo(TextComponent);
