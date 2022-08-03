import { Grid } from "@mui/material";
import MovieCard from "./MovieCard";

function MovieList({ movies }) {
  return (
    <Grid container spacing={3} mt={1} >
      {movies.map((movie) => (
        <Grid key={movie.id} item xs={12} sm={6} md={4} lg={3}>
          <MovieCard movie={movie} />
        </Grid>
      ))}
    </Grid>
  );
}

export default MovieList;