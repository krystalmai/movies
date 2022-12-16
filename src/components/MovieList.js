import { Button, Grid, Skeleton, Stack } from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changePage } from "../features/movies/moviesSlice";
import InfiniteScroll from 'react-infinite-scroll-component';
import LoadingScreen from "./LoadingScreen"

import MovieCard from "./MovieCard";
import { Box } from "@mui/system";

function MovieList() {
  const {movies, page} = useSelector((state) => state.movies)
  const dispatch = useDispatch();
  const [next, setNext] = useState(false);
  const handleChangePage = () => {
    dispatch(changePage());
    console.log(page)
};

  return (
    <InfiniteScroll
    style={{ paddingBottom: '1rem', overflow: 'visible!important' }}
                        dataLength={20}
                        next={handleChangePage}
                        hasMore={next}
                        loader={
                           <LoadingScreen/>
                        }>
    <Grid container spacing={3}   justifyContent="center" alignItems="center">
   
        {movies?.map((movie) => (
            <Grid key={movie.id} item xs={12} sm={4} lg={3} justifyContent="center" alignItems="center">
              <MovieCard movie={movie} />
            </Grid>
          ))}
          <Grid sx={{ textAlign: 'center' }} item xs={12} sm={12} md={12}>
                                <Box sx={{  bottom: next ? '-5rem' : '-2.5rem' }}></Box>
                                <Button sx={{ display: next ? 'none' : 'inline-block' }} onClick={() => setNext(true)}>
                                    Load more
                                </Button>
                            </Grid>
    </Grid>
    </InfiniteScroll>
  );
}

export default MovieList;
