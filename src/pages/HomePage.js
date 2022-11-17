import React, { useEffect } from "react";
import { Alert, Box, Container, Link } from "@mui/material";

import { useSelector, useDispatch } from "react-redux";
import MovieFilter from "../components/MovieFilter";

import "../index.css";

import {
  loadNowplaying,
  loadPopular,
  // loadTrendy,
  loadUpcoming,
  getMoviesByGenre,
} from "../features/movies/moviesSlice";

import MovieList from "../components/MovieList";
import SwiperCarousel from "../components/Swiper";

export default function HomePage() {
  const { moviesByGenre, hasError } = useSelector((state) => state.movies);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadNowplaying());
    dispatch(loadPopular());
    dispatch(loadUpcoming());
    dispatch(getMoviesByGenre(28));
  }, [dispatch]);

  return (
    <Container
      disableGutters
      maxWidth="100vw"
      sx={{
        minHeight: "100vh",
        mb: 3,
        mx: 0,
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        direction: "column",
        alignItems: "center",
      }}
    >
      <SwiperCarousel />

      <MovieFilter />

      <Box
        sx={{
          px: 5,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {hasError ? (
          <>
            <Alert severity="error">Something went wrong</Alert>

            <Link href="/">Go back to home page</Link>
          </>
        ) : (
          <Box minHeight="100vh">
            <MovieList movies={moviesByGenre} />
          </Box>
        )}
      </Box>
    </Container>
  );
}
