
import React from "react";

import Carousel from "react-material-ui-carousel";
import CarouselItem from "./CarouselItem";

function MovieCarousel({ movies }) {


  return (
    <Carousel
      animation="slide"
      sx={{ width: "100vw" }}
      navButtonsAlwaysVisible={true}
      navButtonsProps={{
        style: {
          color: "red",
          background: "none",
        },
      }}
      fullHeightHover={true}
    >
      {movies
        ?.slice(0, 10)
        .map(
          (movie) =>
            movie.backdrop_path && <CarouselItem key={movie.id} movie={movie} />
        )}
    </Carousel>
  );
}

export default MovieCarousel;
