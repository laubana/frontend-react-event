import styled from "@emotion/styled";

export const BackgroundContainer = styled.div`
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  bottom: 0;
  cursor: pointer;
  display: grid;
  justify-items: center;
  left: 0;
  padding: 16px;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 1000;
`;

export const ChildContainer = styled.div`
  box-sizing: border-box;
  height: 100%;
  max-height: 75vh;
  overflow: auto;
`;

export const ContentContainer = styled.div`
  background-color: white;
  box-sizing: border-box;
  border-radius: 8px;
  cursor: default;
  display: grid;
  gap: 16px;
  max-width: 576px;
  padding: 16px;
  width: 100%;
`;

export const IconContainer = styled.div`
  justify-self: flex-end;
`;
