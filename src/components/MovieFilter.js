import { Stack, MenuItem, TextField } from "@mui/material";

import { getMoviesByGenre, setGenre } from "../features/movies/moviesSlice";

import React from "react";
import { useDispatch, useSelector } from "react-redux";

export const FILTER_GENRE_OPTIONS = [
  { id: 28, name: "Action" },
  { id: 12, name: "Adventure" },
  { id: 16, name: "Animation" },
  { id: 35, name: "Comedy" },
  { id: 80, name: "Crime" },
  { id: 99, name: "Documentary" },
  { id: 18, name: "Drama" },
  { id: 10751, name: "Family" },
  { id: 14, name: "Fantasy" },
  { id: 36, name: "History" },
  { id: 27, name: "Horror" },
  { id: 10402, name: "Music" },
  { id: 9648, name: "Mystery" },
  { id: 10749, name: "Romance" },
  { id: 878, name: "Science Fiction" },
  { id: 10770, name: "TV Movie" },
  { id: 53, name: "Thriller" },
  { id: 10752, name: "War" },
  { id: 37, name: "Western" },
];

export default function MovieFilter() {
  const genre = useSelector((state) => state.movies.genre);
  const dispatch = useDispatch();
  return (
    <Stack spacing={3} sx={{ p: 3 }} minWidth="30ch">
      <TextField
        select
        name="genre"
        label="Genre"
        color="secondary"
        value={genre}
        onChange={(e) => {
          dispatch(setGenre(e.target.value));
          dispatch(getMoviesByGenre(e.target.value));
        }}
      >
        {FILTER_GENRE_OPTIONS.map((genre) => (
          <MenuItem key={genre.name} value={genre.id}>
            {genre.name}
          </MenuItem>
        ))}
      </TextField>
    </Stack>
  );
}
