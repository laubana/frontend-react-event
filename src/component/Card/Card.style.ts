import styled from "@emotion/styled";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: auto 1fr;
`;

export const Image = styled.img`
  width: 100%;
  aspect-ratio: 1;
  object-fit: cover;
  border: 1px solid lightgrey;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`;

export const TextContainer = styled.div`
  padding: 8px;
  border-left: 1px solid lightgrey;
  border-bottom: 1px solid lightgrey;
  border-right: 1px solid lightgrey;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
`;
