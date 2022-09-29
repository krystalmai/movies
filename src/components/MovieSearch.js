import { InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import React from "react";
import { FTextField } from "./form";


function MovieSearch({...others}) {

  return (
    <FTextField
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
      {...others}
    />
  );
}

export default MovieSearch;