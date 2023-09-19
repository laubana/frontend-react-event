import { HTMLAttributes } from "react";

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  image: string;
  title: string;
}

export type CardStyle = {};
