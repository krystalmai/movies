import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
// import Typography from "@mui/material/Typography";
import {  Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";
import CircularProgressWithLabel from "./CircularProgressWithLabel";

function MovieCard({ movie }) {
  const navigate = useNavigate();
  return (
    <Card
      sx={{
        display: "flex",
   
        flexDirection: "column",
        justifyContent: "space-between",
        position: "relative",
      }}
      onClick={() => navigate(`/movie/${movie.id}`)}
    >
      <CardMedia
        component="img"
        image={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
        alt="movie poster"
        sx={{ objectFit: "cover" }}
      />

      <Stack
        sx={{ flexGrow: 1, position: "absolute", bottom: 0, right: 0, left:0, height:'20%', background: 'linear-gradient(transparent 1%, rgba(0,0,0,1))' }}
        direction="row"
        p={1}
        alignItems="flex-end"
        justifyContent="flex-end"
      >

        <CircularProgressWithLabel
          value={movie.vote_average * 10}
          color="error"
          
        />
   
      </Stack>
    </Card>
  );
}

export default MovieCard;
