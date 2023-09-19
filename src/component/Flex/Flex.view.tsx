import React from "react";
import { FlexProps } from "./Flex.props";
import { Flex } from "./Flex.style";

const FlexComponent = ({ children, style }: FlexProps): JSX.Element => {
  return <Flex style={style}>{children}</Flex>;
};

export default React.memo(FlexComponent);
