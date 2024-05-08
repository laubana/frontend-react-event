import styled from "@emotion/styled";

import { Sizing } from "./InputPlace.props";

const fontSizes: Record<Sizing, string> = {
  small: `
        font-size: 14px;
    `,
  medium: `
        font-size: 16px;
    `,
  large: `
        font-size: 18px;
    `,
};

const paddingSizes: Record<Sizing, string> = {
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
  width: 100%;
  position: relative;
`;

export const LabelContainer = styled.div<{ sizing: Sizing }>`
  ${({ sizing }) => fontSizes[sizing] + paddingSizes[sizing]}
`;

export const InputContainer = styled.div<{
  sizing: Sizing;
  isVisible: boolean;
}>`
  box-shadow: ${({ isVisible: visibility }) =>
    visibility
      ? "0px 2px 4px rgba(0, 0, 0, 0.25)"
      : "0px 0px 2px rgba(0, 0, 0, 0.25)"};
  ${({ sizing }) => fontSizes[sizing] + paddingSizes[sizing]}
  display: flex;
  border-radius: 8px;
  align-items: center;
  gap: 8px;
`;

export const Input = styled.input`
  border: none;
  width: 100%;

  :focus {
    outline: none;
  }
`;

export const Icon = styled.button`
  display: grid;
  justify-items: center;
  align-items: center;
  background-color: white;
  border: 0;
`;

export const ListContainer = styled.div`
  width: 100%;
  max-height: 150px;
  overflow-y: auto;
  position: absolute;
  margin-top: 6px;
  border-radius: 8px;
  background-color: white;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  z-index: 5;
`;

export const Item = styled.button<{ sizing: Sizing }>`
  ${({ sizing }) => paddingSizes[sizing]};
  display: flex;
  align-items: center;
  gap: 8px;
  background-color: white;
  border: 0;
  width: 100%;

  :not(:last-child) {
    border-bottom: 1px solid lightgrey;
  }

  :hover {
    background-color: lightgrey;
  }
`;

export const IconContainer = styled.div`
  width: 16px;
`;

export const AddressContainer = styled.div`
  flex-grow: 1;
`;

export const ErrorContainer = styled.div<{ sizing: Sizing }>`
  ${({ sizing }) => fontSizes[sizing] + paddingSizes[sizing]}
`;
