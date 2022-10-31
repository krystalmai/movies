import { Grid } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import MovieCard from "./MovieCard";

function MovieList() {
  const { movies } = useSelector((state) => state.movies);
  return (
    <Grid container spacing={3}>
      {movies?.map((movie) => (
        <Grid key={movie.id} item xs={12} sm={4} lg={3}>
          <MovieCard  movie={movie} />
        </Grid>
      ))}
    </Grid>
  );
}

export default MovieList;
