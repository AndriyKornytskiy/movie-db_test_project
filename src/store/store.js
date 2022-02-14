import {configureStore} from '@reduxjs/toolkit';
import {genreReducer, movieDetailsReducer, movieReducer, themeReducer} from "./slices";

const store = configureStore({
    reducer: {
        movies: movieReducer,
        movieDetails: movieDetailsReducer,
        genres: genreReducer,
        theme: themeReducer
    }
});

export {store};