import React from "react";
import { GridProps } from "./Grid.props";
import { Grid } from "./Grid.style";

const GridComponent = ({
  columns = 1,
  children,
  style,
}: GridProps): JSX.Element => {
  return (
    <Grid columns={columns} style={style}>
      {children}
    </Grid>
  );
};

export default React.memo(GridComponent);
