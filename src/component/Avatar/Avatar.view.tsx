import React from "react";
import { AvatarProps } from "./Avatar.props";
import { Container, Image } from "./Avatar.style";

const Avatar = (props: AvatarProps): JSX.Element => {
  const { source, color = "lightgrey" } = props;

  return (
    <Container>
      <Image src={source} color={color} />
    </Container>
  );
};

export default React.memo(Avatar);
