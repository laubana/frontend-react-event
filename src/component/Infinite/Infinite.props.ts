import { CSSProperties } from "react";

export interface InfiniteProps {
  columns?: number;
  hasMore: boolean;
  items: any[];
  onScroll: () => void;
  style?: CSSProperties;
}
