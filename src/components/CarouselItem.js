import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";

function CarouselItem({ movie }) {
  const navigate = useNavigate();

  return (
    <>
      <Card
        sx={{
          position: "relative",
        }}
        onClick={() => navigate(`/movie/${movie.id}`)}
      >
        <CardMedia
          component="img"
          image={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
          alt="movie poster"
          sx={{ objectFit: "fill", maskImage: "red)" }}
        />

        <Stack
          px={10}
          justifyContent="center"
          alignItems="flex-start"
          width="80%"
          height="100%"
          sx={{
            position: "absolute",
            bottom: 0,
            left: 0,
            background:
              "linear-gradient( to right, rgba(0,0,0,0.8), transparent)",
          }}
        >
          <Typography
            gutterBottom
            variant="h2"
            align="center"
            fontSize={16}
            fontWeight="bold"
            component="div"
            color="text"
          >
            {movie.title || movie.name}
          </Typography>
          <Typography
            align="center"
            variant="subtitle1"
            fontSize={13}
            color="text"
          >
            {new Date(
              movie.release_date || movie.first_air_date
            ).toLocaleDateString()}
          </Typography>
  

          <Typography width="50%" variant="caption">{movie.overview}</Typography>
         
        </Stack>
      </Card>
    </>
  );
}

export default CarouselItem;
