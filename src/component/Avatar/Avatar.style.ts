import styled from "@emotion/styled";
import { AvatarStyles } from "./Avatar.props";

export const Container = styled.div``;

export const Image = styled.img<AvatarStyles>`
  ${({ color }) => `border: 3px solid ${color};`}
  width: 100%;
  aspect-ratio: 1;
  object-fit: cover;
  border-radius: 50%;
`;
