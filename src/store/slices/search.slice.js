import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {searchService} from "../../services";

export const getSearchedMovies = createAsyncThunk(
    'search/getSearchedMovies',
    async (data, {rejectWithValue}) => {
        try {
            const {searchedValue, searchedMoviesPage} = data;
            return await searchService.getAll(searchedValue, searchedMoviesPage);
        } catch (e) {
            return rejectWithValue(e.message)
        }
    }
)

const searchSlice = createSlice({
    name: 'search',
    initialState: {
        searchedMovies: [],
        searchedValue: '',
        searchedMoviesPage: null,
        totalPages: null,
        status: null,
        error: null
    },
    reducers: {
        getSearchValue: (state, action) => {
            state.searchedValue = action.payload;
        },
        changeSearchedPage: (state, action) => {
            state.searchedMoviesPage = action.payload;
        }
    },
    extraReducers: {
        [getSearchedMovies.pending]: (state) => {
            state.status = 'pending';
            state.error = null;
        },
        [getSearchedMovies.fulfilled]: (state, action) => {
            state.status = 'fulfilled';
            state.searchedMovies = action.payload.results;
            state.totalPages = action.payload.total_pages;
        },
        [getSearchedMovies.rejected]: (state, action) => {
            state.status = 'rejected';
            state.error = action.payload;
        }
    }
});

const searchReducer = searchSlice.reducer;

export const {getSearchValue, changeSearchedPage} = searchSlice.actions;
export {searchReducer};