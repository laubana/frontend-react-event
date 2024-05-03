export type Color = "lightgrey" | "red";

export interface AvatarProps {
  source: string;
  color?: Color;
}

export type AvatarStyles = {
  color: Color;
};
