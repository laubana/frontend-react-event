import React from "react";
import { useMediaQuery } from "react-responsive";
import { CommentProps } from "./Comment.props";
import { Container } from "./Comment.style";
import Columns from "../../component/Columns";
import Avatar from "../../component/Avatar";

const CommentComponent = (props: CommentProps): JSX.Element => {
  const { imageUrl, content } = props;

  const isMobileDevice = useMediaQuery({ maxWidth: 767 });
  const isTabletDevice = useMediaQuery({ minWidth: 768, maxWidth: 991 });
  const isDesktopDevice = useMediaQuery({ minWidth: 992 });

  return (
    <Container>
      <Columns
        columns={isDesktopDevice ? "1 9" : isTabletDevice ? "2 8" : "3 7"}
      >
        <Avatar imageUrl={imageUrl} />
        <div>{content}</div>
      </Columns>
    </Container>
  );
};

export default React.memo(CommentComponent);
