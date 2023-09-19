import { HTMLAttributes } from "react";

export type Size = "small" | "medium" | "large";

export interface InfiniteProps extends HTMLAttributes<HTMLInputElement> {
  columns: number;
  items: any[];
  hasMore: boolean;
  onScroll: () => void;
}

export type InfiniteStyles = {};
