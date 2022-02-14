import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {moviesService} from "../../services";

const initialState = {
    movies: [],
    // movieDetails: {},
    currentPage: null,
    // currentId: 568124,
    totalPages: 500,
    status: null,
    error: null
};

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

// export const getMovieDetails = createAsyncThunk(
//     'movies/getMovieDetails',
//     async (currentId,{rejectWithValue}) => {
//         try {
//             const movieDetails = await moviesService.getByID(568124);
//             return movieDetails;
//         } catch (e) {
//             return rejectWithValue(e.message)
//         }
//     }
//
// )

const movieSlice = createSlice({
    name: 'movies',
    initialState,
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
        },
        [getAllMovies.rejected]: (state, action) => {
            state.status = 'rejected';
            state.error = action.payload;
        }
    }
});

// const movieDetailsSlice = createSlice({
//     name: 'movieDetails',
//     initialState,
//     reducers: {
//         getMovieId:(state, action) => {
//             const payload_id = action.payload;
//             state.currentId = payload_id;
//         }
//     },
//     extraReducers: {
//         [getMovieDetails.pending]: (state) => {
//             state.error = null;
//         },
//         [getMovieDetails.fulfilled]: (state, action) => {
//             console.log(action.payload);
//         },
//         [getMovieDetails.rejected]: (state, action) => {
//             state.error = action.payload;
//         }
//     }
// });

const movieReducer = movieSlice.reducer;
// const movieDetailsReducer = movieDetailsSlice.reducer;

export const {changePage} = movieSlice.actions;
// export const {getMovieId} = movieDetailsSlice.actions;
export {movieReducer/*, movieDetailsReducer*/};