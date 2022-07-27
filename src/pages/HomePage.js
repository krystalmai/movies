import React, { useState, useEffect } from "react";
import { Alert, Box, Container, Stack, Pagination, Link } from "@mui/material";
import { FormProvider } from "../components/form";
import { useForm } from "react-hook-form";
import axios from "axios";
import { BASE_URL, API_KEY } from "../app/config";
import MovieList from "../components/MovieList";
import MovieFilter from "../components/MovieFilter";
import MovieSearch from "../components/MovieSearch";
import LoadingScreen from "../components/LoadingScreen";
import { applyFilter } from "../utils/filters";

export default function HomePage() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  
  const [currentPage, setCurrentPage] = useState(1);
  // const defaultValues = {
  //   genre: [],
  //   searchQuery: "",
  // };

  const methods = useForm({defaultValues: {
    genre: [],
    searchQuery: "",
  }});
  const { watch, reset } = methods;
  const filters = watch();

  // const [filteredMovies, setFilteredMovies] = useState(null)
  // setFilteredMovies(applyFilter(movies, filters));
  let filteredMovies = applyFilter(movies, filters);

  useEffect(() => {
    const getMovies = async () => {
      setLoading(true);
      try {
        const res = await axios.get(
          `${BASE_URL}/movie/top_rated?api_key=${API_KEY}&page=${currentPage}`
        );
       setMovies(res.data.results)
        // setFilteredMovies(applyFilter(res.data.results, filters));

        setError("");
      } catch (error) {
        console.log(error);
        setError(error.message);
      }

      setLoading(false);
    };
    getMovies();
  }, [currentPage, filters]);

  const handlePageChange = (e, selected) => {
    setCurrentPage(selected);
  };

  // useEffect(() => {
  //   if (filters.searchQuery) {
  //     const getMovies = async () => {
  //       // setLoading(true);
  //       try {
  //         const res = await axios.get(
  //           `${BASE_URL}/search/movie?api_key=${API_KEY}&page=1&query=${filters.searchQuery}`
  //         );
  //         // setFilteredMovies(res.data.results);
  //         // setError("");
  //       } catch (error) {
  //         console.log(error);
  //         // setError(error.message);
  //       }
  //       // setLoading(false);
  //     };
  //     getMovies();
  //   }
  // }, [filters.searchQuery]);

  return (
    <Container sx={{ display: "flex", minHeight: "100vh", mt: 3 }}>
      <Stack>
        <FormProvider methods={methods}>
          <MovieFilter resetFilter={reset} />
        </FormProvider>
      </Stack>
      <Stack>
        <FormProvider methods={methods}>
          <MovieSearch />
        </FormProvider>
        <Box
          sx={{
            mt: 5,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {loading ? (
            <LoadingScreen />
          ) : (
            <>
              {error ? (
                <>
                    <Alert severity="error">{error}</Alert>
                    
                  <Link href="/">Go back to home page</Link>
                </>
              ) : (
                <>
                  <Pagination
                    color="primary"
                    count={200}
                    onChange={handlePageChange}
                    boundaryCount={3}
                    siblingCount={2}
                    page={currentPage}
                  />
                  <MovieList movies={filteredMovies} />
                </>
              )}
            </>
          )}
        </Box>
      </Stack>
    </Container>
  );
}
