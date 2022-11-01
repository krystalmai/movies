import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";

import { useNavigate } from "react-router-dom";
import InfoSlide from "./InfoSlide";

function CarouselItem({ movie, isActive }) {
  const navigate = useNavigate();
 

  return (
    <Card
      width="100%"
      sx={{
        position: "relative",
        borderRadius: 0,
      }}
      onClick={() => navigate(`/movie/${movie.id}`)}
    
    >
      <CardMedia
        component="img"
        image={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
        alt="movie poster"
        sx={{ objectFit: "fill" }}
      />
      <InfoSlide movie={movie} isActive={isActive} />
    </Card>
  );
}

export default CarouselItem;
