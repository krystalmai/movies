import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../index.css";

// import required modules
import { Parallax, Pagination, Navigation } from "swiper";
import CarouselItem from "./CarouselItem";
import { useSelector } from "react-redux";

export default function SwiperCarousel() {
  const movies = useSelector((state) => state.movies.nowplayingMovies);
  return (
    <>
      <Swiper
        style={{
          "--swiper-navigation-color": "red",
          "--swiper-pagination-color": "#fff",
        }}
        speed={600}
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        parallax={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation, Parallax]}
        className="mySwiper"
      >
        {movies?.map(
          (movie) =>
            movie.backdrop_path && (
              <SwiperSlide key={movie.id}>
                {({ isActive }) => (
                  <CarouselItem movie={movie} isActive={isActive} />
                )}
              </SwiperSlide>
            )
        )}
      </Swiper>
    </>
  );
}
