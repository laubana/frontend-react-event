import React from "react";
import { ButtonProps } from "./Button.props";
import { Button, Children } from "./Button.style";

const ButtonComponent = ({
  sizing = "medium",
  color = "red",
  block,
  nopadding,
  onClick,
  children,
}: ButtonProps): JSX.Element => {
  return (
    <Button
      type="button"
      sizing={sizing}
      color={color}
      block={block}
      nopadding={nopadding}
      onClick={onClick}
    >
      <Children>{children}</Children>
    </Button>
  );
};

export default React.memo(ButtonComponent);
