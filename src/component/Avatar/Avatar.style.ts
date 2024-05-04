import styled from "@emotion/styled";
import { Coloring } from "./Avatar.props";

export const Container = styled.div``;

export const Image = styled.img<{ coloring: Coloring }>`
  ${({ coloring }) => `border: 3px solid ${coloring};`}
  width: 100%;
  aspect-ratio: 1;
  object-fit: cover;
  border-radius: 50%;
`;
