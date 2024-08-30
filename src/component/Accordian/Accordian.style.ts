import styled from "@emotion/styled";

export const Container = styled.div`
  border-radius: 8px;
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.25);
  padding: 16px;
`;

export const FooterContainer = styled.div<{ isVisible: boolean }>`
  ${({ isVisible }) =>
    isVisible
      ? "margin-top: 16px; max-height: 100%; transition-duration: 150ms; transition-property: all; transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);"
      : "overflow: hidden; max-height: 0; opacity: 0;"}
`;

export const HeaderContainer = styled.div`
  align-items: center;
  cursor: pointer;
  display: flex;
  gap: 16px;
  justify-content: space-between;
`;
