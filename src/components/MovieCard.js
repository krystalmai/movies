import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Stack, Avatar } from "@mui/material";
import { useNavigate } from "react-router-dom";

function MovieCard({ movie }) {
  const navigate = useNavigate();
  return (
    <>
    <Card  onClick={() => navigate(`/movie/${movie.id}`)}>
      <CardActionArea >
        <CardMedia
          component="img"
            maxWidth={100}
            minHeight={320}
          image={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          alt="movie poster"
           
        />
       
        </CardActionArea>
        
        <Avatar
              sx={{
                width: 50,
                height: 50,
                p: 1,
                fontSize: 12,
                fontWeight: "bold",
                color: "text.main",
                bgcolor:
                  movie.popularity >= 50 ? "success.main" : "error.light",
                position: 'absolute',
                transform: 'translate(30%, -50%)'
              }}
            >
              {movie.popularity.toFixed(1)}
            </Avatar>
          
      </Card>
      <Stack mt={4} alignItems='center' justifyContent='center'>
              <Typography
                gutterBottom
                variant="h2"
                fontSize={16}
                align='center'
                fontWeight="bold"
                component="div"
                color='primary.main'
              >
                {movie.title}
              </Typography>
              <Typography variant="subtitle1" fontSize={15} color="text.light">
                {new Date(movie.release_date).toLocaleDateString()}
              </Typography>
            </Stack>
      </>
  );
}

export default MovieCard;
