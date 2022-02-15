import {configureStore} from '@reduxjs/toolkit';
import {genreReducer, movieDetailsReducer, movieReducer, movieSortedByGenreReducer, themeReducer} from "./slices";

const store = configureStore({
    reducer: {
        movies: movieReducer,
        movieDetails: movieDetailsReducer,
        genres: genreReducer,
        theme: themeReducer,
        movieSorted: movieSortedByGenreReducer
    }
});

export {store};