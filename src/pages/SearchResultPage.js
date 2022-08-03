import React, { useState, useEffect } from "react";
import { Alert, Box, Container, Stack, Link } from "@mui/material";
import { FormProvider } from "../components/form";
import { useForm } from "react-hook-form";
import axios from "axios";
import { BASE_URL, API_KEY } from "../app/config";
import MovieList from "../components/MovieList";
import MovieFilter from "../components/MovieFilter";
import MovieSearch from "../components/MovieSearch";
import LoadingScreen from "../components/LoadingScreen";
import { applyFilter } from "../utils/filters";

export default function SearchResultPage() {

  const [searchResult, setSearchResult] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

 

  const methods = useForm({
    defaultValues: {
      genre: [],
      searchQuery: "",
    },
  });
  const { watch, reset } = methods;
  const filters = watch();



  
  // Get movies using search query if filters.searchQuery has a value
  useEffect(() => {
    if (filters.searchQuery) {
      const getMovies = async () => {
        setLoading(true)
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

  let filteredMovies = applyFilter(searchResult, filters);


  return (
    <Container sx={{ minHeight: "100vh", mt: 3 }}>
      <FormProvider methods={methods}>
        <Stack direction="row">
          <MovieFilter resetFilter={reset} />
          <MovieSearch />
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
              
              
                <MovieList movies={filteredMovies} />
              
            )}
          </>
        )}
      </Box>
    </Container>
  );
}
