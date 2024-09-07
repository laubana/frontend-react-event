import React from "react";

import { AvatarProps } from "./Avatar.props";
import { Container, Image } from "./Avatar.style";

const AvatarComponent = (props: AvatarProps): JSX.Element => {
  const { color = "lightgrey", imageUrl } = props;

  return (
    <Container>
      <Image src={imageUrl} coloring={color} />
    </Container>
  );
};

export default React.memo(AvatarComponent);
