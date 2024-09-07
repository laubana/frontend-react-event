import styled from "@emotion/styled";

export const Container = styled.div<{ isVisible: boolean }>`
  border: 1px solid lightgrey;
  border-radius: 8px;
  padding: 16px;

  ${({ isVisible }) => isVisible && "border: 1px solid black;"}
`;

export const FooterContainer = styled.div<{ isVisible: boolean }>`
  ${({ isVisible }) =>
    isVisible
      ? "margin-top: 16px; max-height: 100%; transition-duration: 150ms; transition-property: all; transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);"
      : "max-height: 0; overflow: hidden; opacity: 0;"}
`;

export const HeaderContainer = styled.div`
  align-items: center;
  cursor: pointer;
  display: flex;
  gap: 16px;
  justify-content: space-between;
`;
