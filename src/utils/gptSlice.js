import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearch: false,
    movieName: null,
    movieResults: null,
  },
  reducers: {
    ToggleGptSearchView: (state) => {
      state.showGptSearch = !state.showGptSearch;
    },
    addGptMoviesResults: (state, action) => {
      const { movieName, movieResults } = action.payload;
      state.movieName = movieName;
      state.movieResults = movieResults;
    },
    clearGptMovieResult: (state) => {
      state.movieName = null;
      state.movieResults = null;
    },
  },
});

export const { ToggleGptSearchView, addGptMoviesResults, clearGptMovieResult } = gptSlice.actions;
export default gptSlice.reducer;
