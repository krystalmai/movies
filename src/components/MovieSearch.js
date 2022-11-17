import { IconButton, InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { searchMovies } from "../features/movies/moviesSlice";
import { useNavigate } from "react-router-dom";

function MovieSearch() {
  const navigate = useNavigate();
  const [openSearch, setOpenSearch] = useState(false);
  const dispatch = useDispatch();
  const handleOpenSearchBox = (e) => {
    setOpenSearch(true);
  };
  const handleClose = () => {
    setOpenSearch(false);
    navigate(`/`)
  };

  const handleSearchChange = (e) => {
    dispatch(searchMovies(e.target.value));
    navigate(`/search?q=${e.target.value}`)
  }

  return (
    <>
      {openSearch ? (
        <TextField
          name="searchQuery"
          color="secondary"
          placeholder="Search..."
          sx={{ minWidth: 200, py: 3, px:0 }}
          size="small"
          InputProps={{
            // startAdornment: (
            //   <InputAdornment position="start">
            //     <SearchIcon/>
            //   </InputAdornment>
            // ),
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={handleClose} id="search-close-button">
                  <CloseIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
          onChange={(e) => {
            handleSearchChange(e)
          }}
        />
      ) : (
        <IconButton onClick={handleOpenSearchBox}>
          <SearchIcon />
        </IconButton>
      )}
    </>
  );
}

export default MovieSearch;
