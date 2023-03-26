import React, { useMemo } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper";

import styled from "styled-components";

const Div = styled.div`
  width: 100vw;
  height: 33vw;
`;

const movieBanner = [
  "https://cdn.galaxycine.vn/media/2022/8/16/dragon-ball-digital-2048x682_1660617922581.jpg",
  "https://cdn.galaxycine.vn/media/2022/8/17/2048x682_1660718719718.png",
  "https://cdn.galaxycine.vn/media/2022/8/17/2048wx682h_1660720794005.jpg",
];

function Slide({ imgSrc }) {
  return (
    <>
      <Div>
        <img className="w-full h-full object-cover" src={imgSrc} alt="..." />
      </Div>
    </>
  );
}

export default function HomePageCarousel() {
  const renderBanner = useMemo(
    () =>
      movieBanner.map((item, index) => {
        return (
          <SwiperSlide key={index}>
            <Slide imgSrc={item} />
          </SwiperSlide>
        );
      }),
    []
  );

  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        style={{
          "--swiper-pagination-color": "#A96851",
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        {renderBanner}
      </Swiper>
    </>
  );
}
