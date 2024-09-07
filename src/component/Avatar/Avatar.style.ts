import styled from "@emotion/styled";

import { Color } from "../../type/Color";

export const Container = styled.div``;

export const Image = styled.img<{ coloring: Color }>`
  aspect-ratio: 1;
  ${({ coloring }) => `border: 3px solid ${coloring};`}
  border-radius: 50%;
  object-fit: cover;
  width: 100%;
`;
