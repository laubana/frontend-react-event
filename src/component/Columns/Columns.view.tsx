import React from "react";

import { ColumnsProps } from "./Columns.props";
import { Columns } from "./Columns.style";

const ColumnsComponent = ({
  children,
  columns,
  style,
}: ColumnsProps): JSX.Element => {
  return (
    <Columns columns={columns} style={style}>
      {children}
    </Columns>
  );
};

export default React.memo(ColumnsComponent);
