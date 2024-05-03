import styled from "@emotion/styled";
import { AutoCompleteStyles, Sizing } from "./AutoComplete.props";

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
  AutoCompleteStyles & {
    visibility: boolean;
  }
>`
  box-shadow: ${({ visibility }) =>
    visibility
      ? "0px 2px 5px rgba(0, 0, 0, 0.25)"
      : "0px 0px 2px rgba(0, 0, 0, 0.25)"};
  ${({ sizing }) => fontSizing[sizing] + paddingSizing[sizing]}
  border-radius: 4px;
  background-color: white;
  display: flex;
  gap: 8px;
  box-sizing: border-box;
  justify-content: space-between;
`;

export const InputText = styled.input`
  font-family: "Montserrat", sans-serif;
  width: 100%;
  border: none;

  :focus {
    outline: none;
  }
`;

export const IconContainer = styled.div`
  cursor: pointer;
`;

export const ListContainer = styled.div`
  position: absolute;
  width: 100%;
  max-height: 150px;
  overflow-y: auto;
  margin-top: 6px;
  border-radius: 4px;
  background-color: white;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.25);
  box-sizing: border-box;
  z-index: 5;
`;

export const ItemContainer = styled.div<AutoCompleteStyles>`
  ${({ sizing }) => paddingSizing[sizing]}
  cursor: pointer;
  box-sizing: border-box;

  :not(:last-child) {
    border-bottom: 1px solid lightgrey;
  }

  :hover {
    background-color: lightgrey;
  }
`;
