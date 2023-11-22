import { createSlice } from '@reduxjs/toolkit';

const contactsInitialState = [
  { id: 'id-1', name: 'Ben', number: '459-12-56' },
  { id: 'id-2', name: 'Gary', number: '443-89-12' },
  { id: 'id-3', name: 'Helen', number: '645-17-79' },
  { id: 'id-4', name: 'Mike', number: '227-91-26' },
];

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  reducers: {
    addContact(state, action) {
      state.push(action.payload);
    },
    deleteContact(state, action) {
      const contactIdToDelete = state.findIndex(
        contact => contact.id === action.payload
      );
      state.splice(contactIdToDelete, 1);
    },
  },
});

export const contactsReducer = contactsSlice.reducer;
export const { addContact, deleteContact } = contactsSlice.actions;
