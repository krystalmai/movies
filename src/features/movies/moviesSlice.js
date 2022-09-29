import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import apiService from "../../app/apiService";
import { API_KEY } from "../../app/config";
import {toast} from "react-toastify"

export const loadTrendy = createAsyncThunk(
  "movies/loadTrendy",
  async (timeWindow) => {
    const res = await apiService.get(`/trending/all/${timeWindow}?api_key=${API_KEY}`);
    return res.results
  }
);

export const loadNowplaying = createAsyncThunk(
  "movies/loadNowplaying",
  async () => {
    const res = await apiService.get(`movie/now_playing?api_key=${API_KEY}`);
    return res.results
  }
)
export const loadUpcoming = createAsyncThunk(
  "movies/loadUpcoming",
  async () => {
    const res = await apiService.get(`movie/upcoming?api_key=${API_KEY}`);
    return res.results
  }
)
export const loadPopular = createAsyncThunk(
  "movies/loadPopular",
  async () => {
    const res = await apiService.get(`movie/popular?api_key=${API_KEY}`);
    return res.results
  }
)

const initialState = {
  isLoading: true,
  hasError: false,
  search: null,
  genres: null,
  trendyMovies: null,
  nowplayingMovies: null,
  upcomingMovies: null,
  popularMovies: null,
  totalPage: null,
  pageNum: 1,
}

export const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    setPageNum: (state, action) => {
      state.pageNum = action.payload;
      state.isLoading = true
    },
    setSearch: (state, action) => {
      state.search = action.payload;

    }
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
      .addCase(loadTrendy.fulfilled, (state, action) => {
        state.isLoading = false;
        state.hasError = false;
        state.trendyMovies = action.payload
    })
      .addCase(loadNowplaying.fulfilled, (state, action) => {
        state.isLoading = false;
        state.hasError = false;
        state.nowplayingMovies = action.payload
    })
      .addCase(loadUpcoming.fulfilled, (state, action) => {
        state.isLoading = false;
        state.hasError = false;
        state.upcomingMovies = action.payload
    })
      .addCase(loadPopular.fulfilled, (state, action) => {
        state.isLoading = false;
        state.hasError = false;
        state.popularMovies = action.payload
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
  }
})

export const { setPageNum, setSearch } = moviesSlice.actions;
export default moviesSlice.reducer