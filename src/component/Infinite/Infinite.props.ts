import { HTMLAttributes } from "react";

export type Sizing = "small" | "medium" | "large";

export interface InfiniteProps extends HTMLAttributes<HTMLInputElement> {
  columns: number;
  items: any[];
  hasMore: boolean;
  onScroll: () => void;
}

export type InfiniteStyles = {};
