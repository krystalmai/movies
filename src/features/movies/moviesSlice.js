import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import apiService from "../../app/apiService";
import { API_KEY } from "../../app/config";
import {toast} from "react-toastify"

export const loadTrendy = createAsyncThunk(
  "movies/loadTrendy",
  async (timeWindow, page) => {
    const res = await apiService.get(`/trending/all/${timeWindow}?api_key=${API_KEY}&page=${page}`);
    return res.results
  }
);

export const loadNowplaying = createAsyncThunk(
  "movies/loadNowplaying",
  async () => {
    const res = await apiService.get(`movie/now_playing?api_key=${API_KEY}&limit=10`);
    return res.results
  }
)
export const loadUpcoming = createAsyncThunk(
  "movies/loadUpcoming",
  async (page) => {
    const res = await apiService.get(`movie/upcoming?api_key=${API_KEY}&page=${page}`);
    return res.results
  }
)
export const loadPopular = createAsyncThunk(
  "movies/loadPopular",
  async (page) => {
    const res = await apiService.get(`movie/popular?api_key=${API_KEY}&page=${page}`);
    return res.results
  }
)
export const getMoviesByGenre = createAsyncThunk(
  "movies/getMoviesByGenre",
    async (genreId, page) => {
   
      const res = await apiService.get(`discover/movie?api_key=${API_KEY}&with_genres=${genreId}&page=${page}`);
      return res.results
    }
  
)
export const searchMovies = createAsyncThunk(
  "movies/searchMovies",
  async (search, page) => {
   
    const res = await apiService.get(`search/movie?api_key=${API_KEY}&query=${search}&page=${page}`);
    return res.results
  }
)

const initialState = {
  isLoading: true,
  hasError: false,
  genre: 28,
  movies: null,
  nowplayingMovies: null,
  totalPage: null,
  page: 1,
}

export const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    changePage: (state, action) => {
      if (action.payload) {
        state.page = action.payload;
    } else {
        state.page++;
    }
      state.isLoading = true
    },
    setGenre: (state, action) => {
      state.genre = action.payload;
    },

  },
  extraReducers: (builder) => {
    builder
      .addCase(loadTrendy.pending, (state) => {
      state.isLoading = true
    })
      .addCase(loadNowplaying.pending, (state) => {
      state.isLoading = true
    })
      .addCase(loadUpcoming.pending, (state) => {
      state.isLoading = true
    })
      .addCase(loadPopular.pending, (state) => {
      state.isLoading = true
      })
      .addCase(getMoviesByGenre.pending, (state) => {
      state.isLoading = true
      })
      .addCase(searchMovies.pending, (state) => {
      state.isLoading = true
      })
      .addCase(loadTrendy.fulfilled, (state, action) => {
        state.isLoading = false;
        state.hasError = false;
        state.movies = action.payload
    })
      .addCase(loadNowplaying.fulfilled, (state, action) => {
        state.isLoading = false;
        state.hasError = false;
        state.nowplayingMovies = action.payload
    })
      .addCase(loadUpcoming.fulfilled, (state, action) => {
        state.isLoading = false;
        state.hasError = false;
        state.movies = action.payload
    })
      .addCase(loadPopular.fulfilled, (state, action) => {
        state.isLoading = false;
        state.hasError = false;
        state.movies = action.payload
      })
      .addCase(getMoviesByGenre.fulfilled, (state, action) => {
        state.isLoading = false;
        state.hasError = false;
        state.movies = action.payload
      })
      .addCase(searchMovies.fulfilled, (state, action) => {
        state.isLoading = false;
        state.hasError = false;
        state.movies = action.payload
      })
      .addCase(loadTrendy.rejected, (state, action) => {
        state.isLoading = false;
        toast.error(action.error.message)
    })
      .addCase(loadNowplaying.rejected, (state, action) => {
        state.isLoading = false;
        toast.error(action.error.message)
    })
      .addCase(loadUpcoming.rejected, (state, action) => {
        state.isLoading = false;
        toast.error(action.error.message)
    })
      .addCase(loadPopular.rejected, (state, action) => {
        state.isLoading = false;
        toast.error(action.error.message)
    })
      .addCase(getMoviesByGenre.rejected, (state, action) => {
        state.isLoading = false;
        toast.error(action.error.message)
    })
  }
})

export const { changePage, setGenre } = moviesSlice.actions;
export default moviesSlice.reducer