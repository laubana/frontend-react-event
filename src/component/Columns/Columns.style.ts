import styled from "@emotion/styled";

export const Columns = styled.div<{ columns: string }>`
  ${({ columns }) =>
    `grid-template-columns: ${columns
      .split(" ")
      .map((column) => `${column}fr`)
      .join(" ")}`};
  display: grid;
  gap: 16px;
  justify-items: flex-start;
  align-items: flex-start;
`;
