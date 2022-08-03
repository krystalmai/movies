import { Box, Button, Stack, Typography, Menu, MenuItem } from "@mui/material";
import { FMultiCheckbox } from "./form";
import ClearAllIcon from "@mui/icons-material/ClearAll";
import React from "react";

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

export default function MovieFilter({ resetFilter }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Stack spacing={3} sx={{ p: 3 }}>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        variant="contained"
        color="primary"
      >
        Filter by Genre
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        
          <Stack spacing={1} sx={{ p: 3 }}>
            <Typography variant="h6" sx={{ fontWeight: 600 }}>
              Genres
            </Typography>
            <FMultiCheckbox
              name="genre"
              options={FILTER_GENRE_OPTIONS}
              sx={{ width: 1 }}
            />
            
          </Stack>
        
      </Menu>
    </Stack>
  );
}
