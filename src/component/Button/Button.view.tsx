import React from "react";
import { ButtonProps } from "./Button.props";
import { Button, ChildrenContainer } from "./Button.style";

const ButtonComponent = ({
  size = "medium",
  color = "red",
  block,
  nopadding,
  onClick,
  children,
}: ButtonProps): JSX.Element => {
  return (
    <Button
      type="button"
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
