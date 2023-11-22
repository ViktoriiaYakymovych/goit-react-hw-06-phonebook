import { createSlice } from '@reduxjs/toolkit';

const contactsInitialState = [];

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  reducer: {
    addContact(state, action) {
      state.push(action.payload);
    },
    deleteContact(state, action) {
      const contactToDelete = state.findIndex(
        contact => contact.id === action.payload
      );
      state.splice(contactToDelete, 1);
    },
  },
});

export const contactsReducer = contactsSlice.reducer;
export const { addContact, deleteContact } = contactsSlice.actions;
