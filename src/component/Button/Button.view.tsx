import React from "react";
import { ButtonProps } from "./Button.props";
import { Button, Children } from "./Button.style";

const ButtonComponent = ({
  _size = "medium",
  color = "red",
  block,
  nopadding,
  onClick,
  children,
}: ButtonProps): JSX.Element => {
  return (
    <Button
      type="button"
      _size={_size}
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
