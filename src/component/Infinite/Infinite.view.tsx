import React from "react";
import { InfiniteProps } from "./Infinite.props";
import InfiniteScroll from "react-infinite-scroll-component";
import { Spinner, SpinnerContainer } from "./Infinite.style";

const InfiniteComponent = ({
  columns,
  items,
  hasMore,
  onScroll,
  style,
}: InfiniteProps): JSX.Element => {
  return (
    <InfiniteScroll
      dataLength={items.length}
      next={onScroll}
      hasMore={hasMore}
      loader={
        <SpinnerContainer>
          <Spinner className="spinner-border text-danger" />
        </SpinnerContainer>
      }
      style={{
        display: "grid",
        justifyItems: "center",
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
        gap: "16px",
        ...style,
      }}
    >
      {items}
    </InfiniteScroll>
  );
};

export default React.memo(InfiniteComponent);
