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
import MovieList from "../components/MovieList";
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

export default function HomePage() {

  const {
    pageNum,
    isLoading,
    hasError,
    search,
    genres,
    trendyMovies,
    nowplayingMovies,
    upcomingMovies,
    popularMovies,
  } = useSelector((state) => state.movies);
  const dispatch = useDispatch();

  const methods = useForm({
    defaultValues: {
      genre: null,
      searchQuery: "",
    },
  });
  const { watch } = methods;
  const filters = watch();

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
        maxWidth: "100vw",
        my: 3,
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        direction: "column",
        alignItems: "center",
      }}
    >
      <FormProvider methods={methods}>
        <Stack
          minWidth="80vw"
          direction={{ xs: "column", sm: "row" }}
          alignItems="center"
          gap={{ sm: 3, md: 10 }}
          mt={2}
        >
          <MovieFilter
            sx={{
              display: filters.searchQuery ? "none" : "block",
            }}
          />

          <MovieSearch />
        </Stack>
      </FormProvider>
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
                  <MovieList movies={popularMovies} name="Popular" />
                  <MovieList movies={upcomingMovies} name="Upcoming" />
                </Box>
              )}
            </>
          )}
        </Box>
      </CSSTransition>
    </Container>
  );
}
