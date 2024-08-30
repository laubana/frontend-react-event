import { ReactNode } from "react";

export interface AccordianProps {
  children: ReactNode;
  onClose?: () => void;
  onOpen?: () => void;
  title: ReactNode;
}
