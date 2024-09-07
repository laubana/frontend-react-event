import styled from "@emotion/styled";

export const Container = styled.div`
  border-radius: 8px;
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.25);
  display: grid;
  grid-template-rows: auto 1fr;
  height: 100%;
  width: 100%;

  :hover {
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.25);
  }
`;

export const Image = styled.img`
  aspect-ratio: 1;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  object-fit: cover;
  width: 100%;
`;

export const TextContainer = styled.div`
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  padding: 8px;
`;
