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

export const fetchContacts = createAsyncThunk(
    'contacts/fetchAll',
    async (_, thunkAPI) => {
        try {
            const { data } = await instance.get('contacts');
            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const addContact = createAsyncThunk(
    'contacts/addContact',
    async (formData, thunkApi) => {
        try {
            const { data } = await instance.post('contacts', formData);
            return data;
        } catch (error) {
            return thunkApi.rejectWithValue(error.message);
        }
    }
);

export const deleteContact = createAsyncThunk(
    'contacts/deleteContacts',
    async (id, thunkAPI) => {
        try {
            const response = await instance.delete(`contacts/${id}`);
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);