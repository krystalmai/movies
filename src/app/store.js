import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "../features/movies/moviesSlice";

const rootReducer = {
movies: moviesReducer,
}

const store = configureStore({
  reducer: rootReducer
})

export default store
