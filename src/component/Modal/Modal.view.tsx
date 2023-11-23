import React from "react";
import { ModalProps } from "./Modal.props";
import { Background, Content } from "./Modal.style";
import { FaXmark } from "react-icons/fa6";

const ModalComponent = ({
  visibility,
  onClose,
  children,
}: ModalProps): JSX.Element => {
  return (
    <>
      {visibility && (
        <Background>
          <Content>
            <FaXmark />
            {children}
          </Content>
        </Background>
      )}
    </>
  );
};

export default React.memo(ModalComponent);
