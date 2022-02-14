import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    darkMode: false
};

const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        changeTheme:(state, action) => {
            state.darkMode = action.payload;
        }
    }
});

const themeReducer = themeSlice.reducer;

export const {changeTheme} = themeSlice.actions;
export {themeReducer};