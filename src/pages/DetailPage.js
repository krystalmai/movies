import React, { useState, useEffect } from "react";
import { useParams, Link as RouterLink } from "react-router-dom";
import { BASE_URL, API_KEY } from "../app/config";
import axios from "axios";
import {
  Card,
  Grid,
  Container,
  Typography,
  Box,
  Stack,
  Rating,
  Divider,
  Breadcrumbs,
  Link,
  Alert,
  Chip,
} from "@mui/material";
import LoadingScreen from "../components/LoadingScreen";

export default function DetailPage() {
  let params = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if (params.id) {
      const getMovie = async () => {
        setLoading(true);
        try {
          const res = await axios.get(
            `${BASE_URL}/movie/${params.id}?api_key=${API_KEY}`
          );
          console.log(res.data);
          setMovie(res.data);
          setError("");
        } catch (error) {
          console.log(error);
          setError(error.message);
        }
        setLoading(false);
      };
      getMovie();
    }
  }, [params]);

  return (
    <Container
      sx={{
        my: 3,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Breadcrumbs
        aria-label="breadcrumb"
        sx={{ mb: 4, alignSelf: "flex-start" }}
      >
        <Link underline="hover" color="inherit" component={RouterLink} to="/">
          Top Rated
        </Link>
        <Typography color="text.primary">{movie?.title}</Typography>
      </Breadcrumbs>
      <Box
        sx={{
          position: "relative",
          height: 1,
          maxWidth: "900px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        {loading ? (
          <LoadingScreen />
        ) : (
          <>
            {error ? (
              <Alert severity="error">{error}</Alert>
            ) : (
              <>
                {movie && (
                  <Card>
                    <Grid
                      container
                      spacing={1}
                      justifyContent="center"
                      bgcolor="success.lighter"
                    >
                      <Grid
                        item
                        xs={8}
                        md={6}
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                      >
                        <Box p={2}>
                          <Box
                            sx={{
                              borderRadius: 2,
                              overflow: "hidden",
                              display: "flex",
                            }}
                          >
                            <Box
                              component="img"
                              sx={{
                                width: 1,
                                height: 1,
                              }}
                              src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
                              alt="movie"
                            />
                          </Box>
                        </Box>
                      </Grid>
                      <Grid item xs={8} md={5} mx={2}>
                        <Typography
                          variant="h6"
                          sx={{
                            mt: 2,
                            mb: 1,
                            fontWeight: "bold",
                            display: "block",
                            textTransform: "uppercase",
                            color: "info.main",
                          }}
                        >
                          {movie.title}
                        </Typography>
                        <Stack direction="row" spacing={1}>
                          {movie.genres.map((genre) => (
                            <Chip
                              key={genre.id}
                              label={genre.name}
                              color="primary"
                              size="small"
                              sx={{ p: 0, fontSize: 12 }}
                            />
                          ))}
                        </Stack>
                        <Stack
                          direction="row"
                          alignItems="center"
                          spacing={1}
                          sx={{ my: 2 }}
                        >
                          <Rating
                            value={movie.vote_average / 2}
                            max={5}
                            precision={0.1}
                            readOnly
                          />
                          <Typography
                            variant="body2"
                            sx={{ color: "text.secondary", mt: 2 }}
                          >
                            ({movie.vote_count} votes)
                          </Typography>
                        </Stack>
                        <Typography
                          variant="body"
                          fontSize={14}
                          fontWeight="bold"
                          sx={{ display: "block" }}
                        >
                          IMBD ID: {movie.imdb_id}
                        </Typography>
                        <Typography
                          variant="body"
                          fontSize={14}
                          fontWeight="bold"
                          sx={{ display: "block" }}
                        >
                          Runtime: {movie.runtime} minutes
                        </Typography>
                        <Typography
                          variant="body"
                          fontSize={14}
                          fontWeight="bold"
                        >
                          Produced by &nbsp;
                        </Typography>
                          {movie.production_companies.map((company, index) => (
                            <Typography fontWeight="bold" variant="body" fontSize={14}>
                              {index === movie.production_companies.length - 1 ? `${company.name}.` : `${company.name}, `}
                            </Typography>
                          ))}

                        <Divider sx={{ borderStyle: "dashed", my: 2 }} />
                        <Box display="flex" flexDirection="column" gap={2}>
                          {movie.tagline === "" || (
                            <Typography
                              variant="overline"
                              align="center"
                              sx={{
                                bgcolor: "success.main",
                                borderRadius: 1,
                                px: 0.5,
                              }}
                            >
                              "{movie.tagline}"
                            </Typography>
                          )}
                          <Typography variant="body" align="justify" paragraph>
                            {movie.overview}
                          </Typography>
                        </Box>
                      </Grid>
                    </Grid>
                  </Card>
                )}
                {!movie && (
                  <Typography variant="h6">404 movie not found</Typography>
                )}
              </>
            )}
          </>
        )}
      </Box>
    </Container>
  );
}
