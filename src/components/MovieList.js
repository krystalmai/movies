import { Grid, Skeleton, Stack } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";

import MovieCard from "./MovieCard";

function MovieList({ movies }) {

  return (
    <Grid container spacing={3}   justifyContent="center" alignItems="center">
   
        {movies?.map((movie) => (
            <Grid key={movie.id} item xs={12} sm={4} lg={3} justifyContent="center" alignItems="center">
              <MovieCard movie={movie} />
            </Grid>
          ))}
    </Grid>
  );
}

export default MovieList;
