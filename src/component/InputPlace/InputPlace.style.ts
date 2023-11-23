import styled from "@emotion/styled";

import { Sizing, PlaceStyles } from "./InputPlace.props";

const fontSizing: Record<Sizing, string> = {
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

const paddingSizing: Record<Sizing, string> = {
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

export const InputContainer = styled.div<
  PlaceStyles & {
    visibility: boolean;
  }
>`
  box-shadow: ${({ visibility }) =>
    visibility
      ? "0px 2px 5px rgba(0, 0, 0, 0.25)"
      : "0px 0px 2px rgba(0, 0, 0, 0.25)"};
  ${({ sizing }) => fontSizing[sizing] + paddingSizing[sizing]}
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

export const ListContainer = styled.div`
  width: 100%;
  position: absolute;
  border-radius: 8px;
  margin-top: 6px;
  background-color: white;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.25);
  z-index: 5;
  cursor: pointer;
`;

export const ItemContainer = styled.div<PlaceStyles>`
  ${({ sizing }) => paddingSizing[sizing]};
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 8px;

  :not(:last-child) {
    border-bottom: 1px solid lightgrey;
  }

  :hover {
    background-color: lightgrey;
  }
`;
