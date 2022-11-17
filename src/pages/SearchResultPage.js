import { Stack } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";

import MovieList from "../components/MovieList";

export function SearchResultPage () {
  const {searchResult} = useSelector((state) => state.movies)
  return (
    <Stack m={10} minHeight="90vh">
      <MovieList movies={searchResult}/>
    </Stack>
  );
}
