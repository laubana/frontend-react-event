import React from "react";
import { AvatarProps } from "./Avatar.props";
import { Container, Image } from "./Avatar.style";

const Avatar = (props: AvatarProps): JSX.Element => {
  const { source, coloring = "lightgrey" } = props;

  return (
    <Container>
      <Image src={source} coloring={coloring} />
    </Container>
  );
};

export default React.memo(Avatar);
