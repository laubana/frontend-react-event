import styled from "@emotion/styled";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: auto 1fr;
  border-radius: 8px;
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.25);

  :hover {
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.25);
  }
`;

export const Image = styled.img`
  width: 100%;
  aspect-ratio: 1;
  object-fit: cover;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`;

export const TextContainer = styled.div`
  padding: 8px;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
`;
