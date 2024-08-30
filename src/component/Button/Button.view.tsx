import React from "react";
import { ButtonProps } from "./Button.props";
import { Button, ChildrenContainer } from "./Button.style";

const ButtonComponent = ({
  block,
  children,
  coloring: color = "red",
  nopadding,
  onClick,
  sizing: size = "medium",
  type = "button",
}: ButtonProps): JSX.Element => {
  return (
    <Button
      type={type}
      size={size}
      color={color}
      block={block}
      nopadding={nopadding}
      onClick={onClick}
    >
      <ChildrenContainer>{children}</ChildrenContainer>
    </Button>
  );
};

export default React.memo(ButtonComponent);
