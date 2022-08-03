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
  const [searchResult, setSearchResult] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [currentPage, setCurrentPage] = useState(1);

  const methods = useForm({
    defaultValues: {
      genre: [],
      searchQuery: "",
    },
  });
  const { watch, handleSubmit } = methods;
  const filters = watch();

  const onSubmit = (data) => console.log(data);

  const handlePageChange = (e, selected) => {
    setCurrentPage(selected);
  };

  // Get default movie list from API for each page
  useEffect(() => {
    const getMovies = async () => {
      setLoading(true);
      try {
        const res = await axios.get(
          `${BASE_URL}/movie/top_rated?api_key=${API_KEY}&page=${currentPage}`
        );
        setMovies(res.data.results);
        setError("");
      } catch (error) {
        console.log(error);
        setError(error.message);
      }
      setLoading(false);
    };
    getMovies();
  }, [currentPage]);

  // Get movies using search query if filters.searchQuery has a value
  useEffect(() => {
    if (filters.searchQuery) {
      console.log(filters.searchQuery);
      const getMovies = async () => {
        setLoading(true);
        try {
          const res = await axios.get(
            `${BASE_URL}/search/movie?api_key=${API_KEY}&page=1&query=${filters.searchQuery}`
          );
          setSearchResult(res.data.results);
          setError("");
        } catch (error) {
          console.log(error);
          setError(error.message);
        }
        setLoading(false);
      };
      getMovies();
    }
  }, [filters.searchQuery]);

  // filteredMovies is used to render the movie grid to display either
  // default movie list(can be filtered by genre) or search results
  let filteredMovies = filters.searchQuery
    ? searchResult
    : applyFilter(movies, filters);

  return (
    <Container sx={{ minHeight: "100vh", mt: 3 }}>
      <FormProvider methods={methods}>
        <Stack direction="row">
          <MovieFilter />
          <form onSubmit={handleSubmit(onSubmit)}>
            <MovieSearch />
          </form>
        </Stack>
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
    </Container>
  );
}
