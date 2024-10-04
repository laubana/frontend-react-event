import { Size } from "../type/Size";

export const fontSizes: Record<Size, string> = {
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

export const paddingSizes: Record<Size, string> = {
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
