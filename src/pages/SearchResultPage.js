import { Stack } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";

import MovieList from "../components/MovieList";

export function SearchResultPage () {
  
  return (
    <Stack m={10} minHeight="90vh">
      <MovieList />
    </Stack>
  );
}
