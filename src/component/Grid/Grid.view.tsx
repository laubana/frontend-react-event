import React from "react";
import { GridProps } from "./Grid.props";
import { Grid } from "./Grid.style";

const GridComponent = ({
  columns,
  children,
  style,
}: GridProps): JSX.Element => {
  return (
    <Grid style={{ gridTemplateColumns: `repeat(${columns}, 1fr)`, ...style }}>
      {children}
    </Grid>
  );
};

export default React.memo(GridComponent);
