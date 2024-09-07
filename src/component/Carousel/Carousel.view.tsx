import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import React from "react";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "./Carousel.css";
import { CarouselProps } from "./Carousel.props";
import { Container } from "./Carousel.style";

const CarouselComponent = (props: CarouselProps): JSX.Element => {
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

export default React.memo(CarouselComponent);
