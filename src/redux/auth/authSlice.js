import { createSlice } from "@reduxjs/toolkit";
import { register, logIn, logOut, refreshUser } from './operations'

const initialState = {
    userData: null,
    token: null,
    isLoading: false,
    authenticated: false,
    error: null,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(register.fulfilled, (state, action) => {
                state.user = action.payload.user;
                state.token = action.payload.token;
                state.authenticated = true;
                state.isLoggedIn = true;
            })
            .addCase(logIn.fulfilled, (state, action) => {
                state.user = action.payload.user;
                state.token = action.payload.token;
                state.authenticated = true;
                state.isLoggedIn = true;
            })
            .addCase(logOut.fulfilled, (state, action) => {
                state.user = { name: null, email: null };
                state.token = null;
                state.authenticated = false;
                state.isLoggedIn = false;
            })
            .addCase(refreshUser.pending, (state, action) => {
                state.isRefreshing = true;
            })
            .addCase(refreshUser.fulfilled, (state, action) => {
                state.user = action.payload;
                state.isLoggedIn = true;
                state.authenticated = true;
                state.isRefreshing = false;
            })
            .addCase(refreshUser.rejected, (state, action) => {
                state.isRefreshing = false;
            })
    }
})

export const authReducer = authSlice.reducer;
export const selectIsLoggedIn = state => state.auth.isLoggedIn;
export const selectUser = state => state.auth.user;
export const selectIsRefreshing = state => state.auth.isRefreshing;