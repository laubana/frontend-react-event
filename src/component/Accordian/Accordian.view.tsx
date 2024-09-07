import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

import { AccordianProps } from "./Accordian.props";
import { Container, FooterContainer, HeaderContainer } from "./Accordian.style";

const AccordianComponent = (props: AccordianProps): JSX.Element => {
  const { children, onClose = () => null, onOpen = () => null, title } = props;

  const [isVisibile, setIsVisible] = useState<boolean>(false);

  const handleToggle = () => {
    setIsVisible((prevState) => !prevState);

    if (isVisibile) {
      onClose();
    } else {
      onOpen();
    }
  };

  return (
    <Container isVisible={isVisibile}>
      <HeaderContainer onClick={handleToggle}>
        {title}
        {isVisibile ? (
          <FaChevronUp color="black" />
        ) : (
          <FaChevronDown color="lightgrey" />
        )}
      </HeaderContainer>
      <FooterContainer isVisible={isVisibile}>{children}</FooterContainer>
    </Container>
  );
};

export default React.memo(AccordianComponent);
