import React from "react";
import { AvatarProps } from "./Avatar.props";
import { Container, Image } from "./Avatar.style";

const Avatar = (props: AvatarProps): JSX.Element => {
  const { imageUrl, coloring = "lightgrey" } = props;

  return (
    <Container>
      <Image src={imageUrl} coloring={coloring} />
    </Container>
  );
};

export default React.memo(Avatar);
