import React, { useRef } from "react";
import { FaXmark } from "react-icons/fa6";
import { ModalProps } from "./Modal.props";
import {
  BackgroundContainer,
  ContentContainer,
  IconContainer,
} from "./Modal.style";

const ModalComponent = ({
  isVisibile,
  onClose,
  children,
}: ModalProps): JSX.Element => {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <>
      {isVisibile && (
        <BackgroundContainer
          ref={ref}
          onClick={(event) => {
            if (event.target === ref.current) {
              onClose();
            }
          }}
        >
          <ContentContainer>
            <IconContainer>
              <FaXmark
                size={16}
                onClick={onClose}
                cursor="pointer"
                style={{}}
              />
            </IconContainer>
            {children}
          </ContentContainer>
        </BackgroundContainer>
      )}
    </>
  );
};

export default React.memo(ModalComponent);
