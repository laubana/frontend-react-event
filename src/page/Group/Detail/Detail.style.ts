import styled from "@emotion/styled";

export const Container = styled.div`
  padding: 32px 16px;
  width: 100%;
  margin: auto;
  max-width: 1140px;
`;

export const Image = styled.img`
  border-radius: 8px;
  width: 100%;
  aspect-ratio: 1;
  object-fit: cover;
`;

export const MapContainer = styled.div`
  width: 100%;
  aspect-ratio: 1;
`;

export const PaginationContainer = styled.div`
  display: grid;
  justify-content: center;
`;

export const Thumbnail = styled.img`
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
