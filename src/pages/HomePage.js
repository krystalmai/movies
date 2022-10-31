import React, { useEffect } from "react";
import {
  Alert,
  Box,
  Container,
  Stack,
  Pagination,
  Link,
  Typography,
} from "@mui/material";
import { FormProvider } from "../components/form";
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import MovieFilter from "../components/MovieFilter";
import MovieSearch from "../components/MovieSearch";
import LoadingScreen from "../components/LoadingScreen";
import "../index.css";
import { CSSTransition } from "react-transition-group";
import {
  loadNowplaying,
  loadPopular,
  loadTrendy,
  loadUpcoming,
  setPageNum,
} from "../features/movies/moviesSlice";
import MovieCarousel from "../components/MovieCarousel";
import MovieList from "../components/MovieList";

export default function HomePage() {
  const {
    pageNum,
    isLoading,
    hasError,
    trendyMovies,
    nowplayingMovies,
    upcomingMovies,
    popularMovies,
  } = useSelector((state) => state.movies);
  const dispatch = useDispatch();



  // const handlePageChange = (e, selected) => {
  //   dispatch(setPageNum(selected));
  // };

  const TRENDY_TABS = [
    { name: "Today", id: "day" },
    { name: "This week", id: "week" },
  ];
  const currentTrendyTab = "day";

  useEffect(() => {
    dispatch(loadTrendy(currentTrendyTab));
    dispatch(loadNowplaying());
    dispatch(loadPopular());
    dispatch(loadUpcoming());
  }, [dispatch]);

  return (
    <Container
      sx={{
        minHeight: "100vh",
        minWidth: "100vw",
        mb: 3,
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        direction: "column",
        alignItems: "center",
      }}
      >
      <MovieCarousel movies={nowplayingMovies} />

        <Stack
          minWidth="80vw"
          direction={{ xs: "column", sm: "row" }}
          alignItems="center"
          gap={{ sm: 3, md: 10 }}
          mt={2}
        >
          <MovieFilter/>

          <MovieSearch />
        </Stack>

      <CSSTransition
        in={!isLoading}
        classNames="fade"
        timeout={300}
        unmountOnExit
      >
        <Box
          sx={{
            my: 5,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {isLoading ? (
            <LoadingScreen />
          ) : (
            <>
              {hasError ? (
                <>
                  <Alert severity="error">Something went wrong</Alert>

                  <Link href="/">Go back to home page</Link>
                </>
              ) : (
                <Box
                  display="flex"
                  flexDirection="column"
                  alignItems="center"
                  maxWidth="80vw"
                >
                  <MovieList />
                </Box>
              )}
            </>
          )}
        </Box>
      </CSSTransition>
    </Container>
  );
}
