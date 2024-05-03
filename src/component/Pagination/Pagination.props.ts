export interface PaginationProps {
  items: any[];
  groupItemNumber?: number;
  groupPageNumber?: number;
  onClick: (items: any[]) => void;
}
