import styled from "@emotion/styled";

import { Size, AutoCompleteStyles } from "./AutoComplete.props";

const sizes: Record<Size, string> = {
  small: `
        padding: 4px 8px;
    `,
  medium: `
        padding: 6px 12px;
    `,
  large: `
        padding: 8px 16px;
    `,
};

export const Container = styled.div`
  position: relative;
`;

export const InputContainer = styled.div<AutoCompleteStyles>`
  ${({ _size }) => sizes[_size]};
  display: flex;
  border: 1px solid lightgrey;
  border-radius: 8px;
  align-items: center;
  gap: 8px;
`;

export const Input = styled.input`
  border: none;
  flex-grow: 1;

  &:focus {
    outline: none;
  }
`;

export const ListContainer = styled.div`
  width: 100%;
  position: absolute;
  border-radius: 8px;
  background-color: white;
  border: 1px solid lightgrey;
  z-index: 5;
  cursor: pointer;
`;

export const ItemContainer = styled.div<AutoCompleteStyles>`
  ${({ _size }) => sizes[_size]};
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 8px;
`;
