import styled from "@emotion/styled";

export const Background = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: grid;
  justify-items: center;
  align-items: center;
`;

export const Content = styled.div`
  background-color: white;
  border-radius: 4px;
  width: calc(100% - 32px);
  max-width: 50vw;
`;
