import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Stack} from "@mui/material";
import { useNavigate } from "react-router-dom";
import CircularProgressWithLabel from "./CircularProgressWithLabel";

function MovieCard({ movie }) {
  const navigate = useNavigate();
  return (
    <>
      <Card
        sx={{ width: 250, height: {md: "90vh", lg: "50vh"}, display: "flex", flexDirection:"column", justifyContent: "space-between" }}
        onClick={() => navigate(`/movie/${movie.id}`)}
      >
        <CardActionArea >
          <CardMedia
            
            component="img"
            image={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            alt="movie poster"
            sx={{height: {md: "70vh", lg: "40vh"}, objectFit: "cover"}}
            
          />
        </CardActionArea>
        
      <Stack sx={{flexGrow: 1}} p={2} direction="row" alignItems="center" justifyContent="flex-end">
      <Stack alignItems="center" justifyContent="flex-start" flexGrow={1}>
        <Typography
          gutterBottom
          variant="h2"
          fontSize={16}
          align="center"
          fontWeight="bold"
          component="div"
          color="text"
        >
          {movie.title || movie.name}
        </Typography>
        <Typography variant="subtitle1" fontSize={15} color="text.light">
          {new Date(movie.release_date || movie.first_air_date).toLocaleDateString()}
        </Typography>
          </Stack>
          
        <CircularProgressWithLabel value={movie.vote_average*10} color="error"/>
      </Stack>
      </Card>
    </>
  );
}

export default MovieCard;
