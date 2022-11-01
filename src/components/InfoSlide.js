
import { CalendarMonth } from "@mui/icons-material";
import { Chip, Slide, Stack, Typography } from "@mui/material";
import React from "react";
import "../index.css";
function InfoSlide({ movie, isActive }) {
  const containerRef = React.useRef(null);

  return (
    <Stack
      ref={containerRef}
      px={10}
      justifyContent="center"
      alignItems="flex-start"
      width="80%"
      height="100%"
      sx={{
        position: "absolute",
        bottom: 0,
        left: 0,
        background: "linear-gradient( to right, rgba(0,0,0, 0.8) 30%, transparent)",
      }}
    >
      <Slide
        in={isActive}
        direction="up"
        style={{ transitionDelay: isActive ? "200ms" : "0" }}
        timeout={300}
        container={containerRef.current}
      >
        <Typography
          gutterBottom
          variant="h1"
          align="center"
          fontSize={30}
          fontWeight="bold"
          component="div"
          color="text"
        >
          {movie.title || movie.name}
        </Typography>
      </Slide>

      <Slide
        in={isActive}
        direction="up"
        style={{ transitionDelay: isActive ? "500ms" : "0" }}
        timeout={300}
        container={containerRef.current}
      >
        <Chip icon={<CalendarMonth />} label={new Date(
          movie.release_date || movie.first_air_date
        ).toLocaleDateString()} color="error" sx={{px: 2, my: 3}} />

        {/* <Typography
          align="center"
          variant="subtitle1"
          fontSize={13}
          color="text"
        >
          {new Date(
            movie.release_date || movie.first_air_date
          ).toLocaleDateString()}
        </Typography> */}
      </Slide>
      <Slide
        in={isActive}
        direction="up"
        style={{ transitionDelay: isActive ? "500ms" : "0" }}
        timeout={300}
        container={containerRef.current}
      >
        <Typography width="45%" variant="caption" textAlign="left">
          {movie.overview}
        </Typography>
      </Slide>
    </Stack>
  );
}

export default InfoSlide;
