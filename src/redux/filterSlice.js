import { createSlice } from '@reduxjs/toolkit';

const filterInitialState = '';

const filterSlice = createSlice({
  name: 'filter',
  initialState: filterInitialState,
  reducers: {
    filterContacts(state, action) {
      state = action.payload;
    },
  },
});

export const filterReducer = filterSlice.reducer;

export const { filterContacts } = filterSlice.actions;
