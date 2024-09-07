import styled from "@emotion/styled";

export const Container = styled.div`
  height: 100%;
  min-width: 0;
  width: 100%;

  .swiper {
    width: 100%;
    height: 100%;
  }

  .swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .swiper-button-prev,
  .swiper-button-next {
    color: midnightblue;
  }

  .swiper-button-prev,
  .swiper-button-next {
    font-weight: bold;
  }
`;
