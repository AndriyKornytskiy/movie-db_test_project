import {configureStore} from '@reduxjs/toolkit';
import {
    genreReducer,
    movieDetailsReducer,
    movieReducer,
    movieSortedByGenreReducer,
    searchReducer,
    themeReducer
    } from "./slices";

const store = configureStore({
    reducer: {
        movies: movieReducer,
        movieDetails: movieDetailsReducer,
        genres: genreReducer,
        theme: themeReducer,
        movieSorted: movieSortedByGenreReducer,
        search: searchReducer
    }
});

export {store};