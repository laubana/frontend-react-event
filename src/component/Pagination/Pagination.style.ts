import styled from "@emotion/styled";

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
`;

export const ItemContainer = styled.div`
  display: flex;
  gap: 16px;
`;

export const Item = styled.button<{ edge?: boolean; selected?: boolean }>`
  border-radius: 4px;
  border: 0;
  background-color: transparent;
  ${({ selected }) => selected && `background-color: crimson; color: white;`}
  padding: 4px 12px;
  ${({ edge }) => edge && `padding: 8px;`}
  display: flex;
  justify-content: center;
  align-items: center;
`;
