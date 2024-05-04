import { CSSProperties } from "react";

export type Sizing = "small" | "medium" | "large";

export interface InfiniteProps {
  columns?: number;
  items: any[];
  hasMore: boolean;
  onScroll: () => void;
  style?: CSSProperties;
}

export type InfiniteStyles = {};
