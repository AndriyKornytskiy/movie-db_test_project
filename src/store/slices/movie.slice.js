import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {moviesService} from "../../services";


export const getAllMoviesByGenre = createAsyncThunk(
    'movies/getAllMoviesByGenre',
    async (data,{rejectWithValue}) => {
        try {
            const {genreId, currentPageSorted} = data;
            return await moviesService.getAllByGenre(genreId, currentPageSorted);
        } catch (e) {
            return rejectWithValue(e.message);
        }
    }
)

export const getAllMovies = createAsyncThunk(
    'movies/getAllMovies',
    async (currentPage, {rejectWithValue}) => {
        try {
            const movies = await moviesService.getAll(currentPage);
            return movies;
        } catch (e) {
            return rejectWithValue(e.message)
        }
    }
)

const movieSlice = createSlice({
    name: 'movies',
    initialState: {
        movies: [],
        currentPage: null,
        totalPages: 500,
        status: null,
        error: null
    },
    reducers: {
        changePage:(state, action) => {
            const payload = action.payload;
            state.currentPage = payload;
        }
    },
    extraReducers: {
        [getAllMovies.pending]: (state) => {
            state.status = 'pending';
            state.error = null;
        },
        [getAllMovies.fulfilled]: (state, action) => {
            state.status = 'fulfilled';
            state.movies = action.payload.results;
            state.status = null;
        },
        [getAllMovies.rejected]: (state, action) => {
            state.status = 'rejected';
            state.error = action.payload;
        }
    }
});

const moviesSortedByGenreSlice = createSlice({
    name: 'moviesSortedByGenre',
    initialState: {
        moviesSortedByGenre: [],
        genreId: null,
        currentPageSorted: null,
        totalSortedPages: null,
        status: null,
        error: null
    },
    reducers: {
        getGenreId:(state, action) => {
            state.genreId = action.payload;
            state.currentPageSorted = 1;
        },
        changePageSorted:(state, action) => {
            state.currentPageSorted = action.payload;
        }
    },
    extraReducers: {
        [getAllMoviesByGenre.pending]: (state) => {
            state.status = 'pending';
            state.error = null;
        },
        [getAllMoviesByGenre.fulfilled]:(state, action) => {
            state.status = 'fulfilled';
            state.moviesSortedByGenre = action.payload.results;
            state.totalSortedPages = action.payload.total_pages;
        },
        [getAllMoviesByGenre.rejected]:(state, action) => {
            state.status = 'rejected';
            state.error = action.payload;
        }
    }
})

const movieReducer = movieSlice.reducer;
const movieSortedByGenreReducer = moviesSortedByGenreSlice.reducer;

export const {changePage} = movieSlice.actions;
export const {getGenreId, changePageSorted} = moviesSortedByGenreSlice.actions;
export {movieReducer, movieSortedByGenreReducer};