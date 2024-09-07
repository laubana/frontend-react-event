import React from "react";

import { ButtonProps } from "./Button.props";
import { Button, ChildrenContainer } from "./Button.style";

const ButtonComponent = ({
  block,
  children,
  color = "red",
  nopadding,
  onClick,
  size = "medium",
  type = "button",
}: ButtonProps): JSX.Element => {
  return (
    <Button
      block={block}
      coloring={color}
      nopadding={nopadding}
      onClick={onClick}
      sizing={size}
      type={type}
    >
      <ChildrenContainer>{children}</ChildrenContainer>
    </Button>
  );
};

export default React.memo(ButtonComponent);
