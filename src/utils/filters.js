

export const applyFilter = (movies, filters) => {
  let filteredMovies = movies
  if (filters.genre.length > 0) {
    filteredMovies = movies.filter((movie) => filters.genre.some((genre) => movie.genre_ids.includes(genre)))
    console.log(filters.genre)
  }
  return filteredMovies
}