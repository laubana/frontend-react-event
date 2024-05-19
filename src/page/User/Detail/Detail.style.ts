import styled from "@emotion/styled";

export const Container = styled.div`
  align-items: center;
  display: grid;
  gap: 16px;
  margin: auto;
  max-width: 540px;
  padding: 32px 16px;
  width: 100%;
`;

export const Image = styled.img`
  border-radius: 8px;
  width: 100%;
  aspect-ratio: 2;
  object-fit: cover;
`;

export const TitleContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
`;
