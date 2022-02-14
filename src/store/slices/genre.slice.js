import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {genresService} from "../../services";

const initialState = {
    genres: [],
    status: null,
    error: null
};

export const getAllGenres = createAsyncThunk(
    'genres/getAllGenres',
    async (_,{rejectWithValue}) => {
        try {
            const genres = await genresService.getAll();
            return genres;
        } catch (e) {
            return rejectWithValue(e.message)
        }
    }
)

const genreSlice = createSlice({
    name: 'genres',
    initialState,
    extraReducers: {
        [getAllGenres.fulfilled]:(state, action) => {
            state.status = 'fulfilled';
            state.genres = action.payload.genres;
        },
        [getAllGenres.rejected]:(state, action) => {
            state.status = 'rejected';
            state.error = action.payload;
        }
    }
});

const genreReducer = genreSlice.reducer;

export {genreReducer};