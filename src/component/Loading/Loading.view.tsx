import React from "react";
import { ModalProps } from "./Loading.props";
import { BackgroundContainer, ContentContainer } from "./Loading.style";

const ModalComponent = (props: ModalProps): JSX.Element => {
  const { isVisibile = true } = props;

  return (
    <>
      {isVisibile && (
        <BackgroundContainer>
          <ContentContainer>
            <div style={{ padding: "32px", textAlign: "center" }}>
              <div className="spinner-border text-danger"></div>
            </div>
          </ContentContainer>
        </BackgroundContainer>
      )}
    </>
  );
};

export default React.memo(ModalComponent);
