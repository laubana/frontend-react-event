import { CSSProperties } from "react";

export interface CalendarProps {
  dates: Date[];
  onSelect?: (date: Date) => void;
  setDates: (dates: Date[]) => void;
  style?: CSSProperties;
}
