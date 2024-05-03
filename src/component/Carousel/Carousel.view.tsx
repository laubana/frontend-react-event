import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { CarouselProps } from "./Carousel.props";
import { Container } from "./Carousel.style";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./Carousel.css";

const Carousel = (props: CarouselProps): JSX.Element => {
  const { items } = props;

  return (
    <Container>
      <Swiper
        navigation={true}
        pagination={true}
        modules={[Navigation, Pagination]}
        spaceBetween="16px"
      >
        {items.map((itemMapItem, itemMapItemIndex) => (
          <SwiperSlide key={itemMapItemIndex}>{itemMapItem}</SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};

export default React.memo(Carousel);
