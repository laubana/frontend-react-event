import { ReactNode } from "react";

export interface ModalProps {
  children: ReactNode;
  isVisibile: boolean;
  onClose: () => void;
}
