import { InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import React from "react";
import { FTextField } from "./form";
import { useForm } from 'react-hook-form';

function MovieSearch() {
  return (
    <FTextField
      name="searchQuery"
      sx={{ width: 300, py: 3 }}
      size="small"
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ),
      }}
    />
  );
}

export default MovieSearch;