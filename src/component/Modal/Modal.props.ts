import { HTMLAttributes } from "react";

export interface ModalProps extends HTMLAttributes<HTMLDivElement> {
  visibility: boolean;
  onClose: () => void;
}
