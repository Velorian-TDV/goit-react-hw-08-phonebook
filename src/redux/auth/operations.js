import { createAsyncThunk } from '@reduxjs/toolkit';
import { instance } from '../instace';

export const token = {
    set: newToken => {
        instance.defaults.headers.Authorization = newToken;
    },
    clear: () => {
        instance.defaults.headers.Authorization = '';
    },
};

export const register = createAsyncThunk(
    'auth/registerUser',
    async (formData, thunkApi) => {
        try {
            const { data } = await instance.post(`users/signup`, formData);
            token.set(data.token);
            return data;
        } catch (error) {
            return thunkApi.rejectWithValue(error.message);
        }
    }
);

export const logIn = createAsyncThunk(
    'auth/loginUser',
    async (formData, thunkApi) => {
        try {
            const { data } = await instance.post(`users/login`, formData);
            token.set(data.token);
            return data;
        } catch (error) {
            alert('Please check that your email or password is correct')
            return thunkApi.rejectWithValue(error.message);
        }
    }
);

export const logOut = createAsyncThunk(
    'auth/logOutUser',
    async thunkApi => {
        try {
            await instance.post(`users/logout`);
            token.clear();
            return;
        } catch (error) {
            return thunkApi.rejectWithValue(error.message);
        }
    },
);

export const refreshUser = createAsyncThunk(
    'auth/refreshUser',
    async (_, thunkApi) => {
        try {
            const state = thunkApi.getState();
            const userToken = state.auth.token;
            token.set(userToken);
            const { data } = await instance.get(`users/current`);
            return data;
        } catch (error) {
            return thunkApi.rejectWithValue(error.message);
        }
    },
    {
        condition: (_, { getState }) => {
            const state = getState()
            const token = state.auth.token
            if (!token) { return false }
        }
    }
);