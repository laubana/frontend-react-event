import React from "react";
import { ColumnsProps } from "./Columns.props";
import { Columns } from "./Columns.style";

const FlexComponent = ({
  columns,
  children,
  style,
}: ColumnsProps): JSX.Element => {
  return (
    <Columns
      style={{
        gridTemplateColumns: columns
          .split(" ")
          .map((column) => `${column}fr`)
          .join(" "),
        ...style,
      }}
    >
      {children}
    </Columns>
  );
};

export default React.memo(FlexComponent);
