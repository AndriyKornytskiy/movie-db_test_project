import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {moviesService} from "../../services";

const initialState = {
    movieDetails: {},
    currentId: null,
    status: null,
    error: null
};

export const getMovieDetails = createAsyncThunk(
    'movies/getMovieDetails',
    async (currentId,{rejectWithValue}) => {
        try {
            return await moviesService.getByID(currentId);
        } catch (e) {
            return rejectWithValue(e.message)
        }
    }
)

const movieDetailsSlice = createSlice({
    name: 'movieDetails',
    initialState,
    reducers: {
        getMovieId:(state, action) => {
            state.currentId = action.payload;
        }
    },
    extraReducers: {
        [getMovieDetails.pending]: (state) => {
            state.status = 'pending';
            state.error = null;
        },
        [getMovieDetails.fulfilled]: (state, action) => {
            state.status = 'fulfilled';
            state.movieDetails = action.payload;
        },
        [getMovieDetails.rejected]: (state, action) => {
            state.status = 'rejected';
            state.error = action.payload;
        }
    }
});

const movieDetailsReducer = movieDetailsSlice.reducer;

export const {getMovieId} = movieDetailsSlice.actions;
export {movieDetailsReducer};