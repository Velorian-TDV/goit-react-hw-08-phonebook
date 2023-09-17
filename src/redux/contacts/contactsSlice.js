import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact } from './operations';

const initialState = {
    contacts: [],
    isLoading: false,
    error: null,
};

const handlePending = state => {
    state.isLoading = true;
};

const handleRejected = (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
};

const contactsSlice = createSlice({
    name: 'contacts',
    initialState,
    extraReducers: (builder) => builder
        .addCase(fetchContacts.pending, handlePending)
        .addCase(fetchContacts.rejected, handleRejected)
        .addCase(fetchContacts.fulfilled, (state, action) => {
            state.isLoading = false;
            state.error = null;
            state.contacts = action.payload;
        })

        .addCase(addContact.pending, handlePending)
        .addCase(addContact.rejected, handleRejected)
        .addCase(addContact.fulfilled, (state, action) => {
            state.isLoading = false;
            state.error = null;
            state.contacts.push(action.payload);
        })

        .addCase(deleteContact.pending, handlePending)
        .addCase(deleteContact.fulfilled, (state, action) => {
            state.isLoading = false;
            state.error = null;
            state.contacts = state.contacts.filter(contact => contact.id !== action.payload.id);
        }),
})

export const contactsReducer = contactsSlice.reducer;
export const contactList = state => state.contacts.contacts;
export const contactsLoading = state => state.contacts.isLoading;
export const contactsError = state => state.contacts.error;