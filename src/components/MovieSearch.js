import { InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import React from "react";
import { useDispatch } from "react-redux";
import { searchMovies } from "../features/movies/moviesSlice";



function MovieSearch() {
  
  const dispatch = useDispatch();

  return (
    <TextField
      name="searchQuery"
      color="secondary"
      sx={{ minWidth: 200, py: 3 }}
      size="small"
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ),
      }}
      onChange={(e) => {
        dispatch(searchMovies(e.target.value))
      }}
    />
  );
}

export default MovieSearch;