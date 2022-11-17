import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { Skeleton, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";
import CircularProgressWithLabel from "./CircularProgressWithLabel";
import { useSelector } from "react-redux";
import { CSSTransition } from "react-transition-group";

function MovieCard({ movie }) {
  const navigate = useNavigate();
  const {isLoading} = useSelector(state => state.movies)
  return (
    <>
    {
      isLoading ?  (
        <Skeleton variant="rounded" width={250} height={360} animation="wave"/>
      ) : ( 
       <CSSTransition
          in={!isLoading}
          classNames="fade"
          timeout={500}
        > 
      <Card
        className="movie-card"
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
          backgroundColor: "transparent",
          backgroundImage: "none",
          boxShadow: "none",
        }}
        onClick={() => navigate(`/movie/${movie.id}`)}
      >
     
          <CardMedia
          component="img"
          image={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          alt="movie poster"
          sx={{ objectFit: "cover" }}
        />
  
        <Stack
          sx={{
            flexGrow: 1,
            position: "absolute",
            bottom: 0,
            height: "20%",
            background: "linear-gradient(transparent 1%, rgba(0,0,0,1))",
            borderRadius: 1,
            width: '100%'
          }}
          direction="row"
          p={1}
          alignItems="flex-end"
          justifyContent="flex-end"
          
        >
          <CircularProgressWithLabel
            value={movie.vote_average * 10}
            color="error"
          />
        </Stack>
      </Card>
      </CSSTransition> ) 
    }
    </>
   
  );
}

export default MovieCard;
