import styled from "@emotion/styled";

import { GridStyle } from "./Grid.props";

export const Grid = styled.div<GridStyle>`
  display: grid;
  width: 100%;
  gap: 16px;
  align-items: stretch;
`;
