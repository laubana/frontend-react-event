import styled from "@emotion/styled";

export const Image = styled.img`
  width: 100%;
  border-radius: 8px;
  aspect-ratio: 1;
  cursor: pointer;
  object-fit: cover;
`;

export const Input = styled.button`
  width: 100%;
  border-radius: 8px;
  border: 0;
  background-color: lightgrey;
  display: grid;
  align-items: center;
  justify-items: center;
`;

export const Item = styled.button`
  padding: 0;
  border: 0;
  border-radius: 8px;
`;

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
`;
