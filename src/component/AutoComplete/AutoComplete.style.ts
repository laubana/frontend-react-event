import styled from "@emotion/styled";

import { Size } from "../../type/Size";

const fontSizes: Record<Size, string> = {
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

const paddingSizes: Record<Size, string> = {
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

export const Component = styled.div`
  align-items: center;
  background-color: white;
  display: flex;
`;

export const Container = styled.div`
  position: relative;
  width: 100%;
`;

export const ErrorContainer = styled.div<{ sizing: Size }>`
  ${({ sizing }) => paddingSizes[sizing]}
`;

export const Input = styled.input<{ sizing: Size }>`
  border: none;
  font-family: "Montserrat", sans-serif;
  ${({ sizing }) => fontSizes[sizing]};
  padding: 0;
  width: 100%;

  :focus {
    outline: none;
  }
`;

export const InputContainer = styled.div<{
  sizing: Size;
}>`
  align-items: center;
  background-color: white;
  border: 1px solid lightgrey;
  border-radius: 8px;
  display: flex;
  gap: 8px;
  justify-content: space-between;
  ${({ sizing }) => paddingSizes[sizing]};

  :focus-within {
    border: 1px solid black;
  }
`;

export const Item = styled.div<{ sizing: Size }>`
  cursor: pointer;
  ${({ sizing }) => paddingSizes[sizing]};
  width: 100%;

  :not(:last-child) {
    border-bottom: 1px solid lightgrey;
  }

  :hover {
    background-color: lightgrey;
  }
`;

export const LabelContainer = styled.div<{ sizing: Size }>`
  ${({ sizing }) => paddingSizes[sizing]}
`;

export const ListContainer = styled.div`
  background-color: white;
  border: 1px solid black;
  border-radius: 8px;
  margin-top: 6px;
  max-height: 150px;
  overflow-y: auto;
  position: absolute;
  width: 100%;
  z-index: 5;
`;

export const Wrapper = styled.div``;
