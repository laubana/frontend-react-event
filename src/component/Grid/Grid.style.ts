import styled from "@emotion/styled";

export const Grid = styled.div<{ columns: number }>`
  ${({ columns }) => `grid-template-columns: repeat(${columns}, 1fr)`};
  width: 100%;
  display: grid;
  gap: 16px;
`;
