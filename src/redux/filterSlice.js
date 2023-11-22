import { createSlice } from '@reduxjs/toolkit';

const filterInitialState = '';

const FilterSlice = createSlice({
  name: 'filter',
  initialState: filterInitialState,
  reducer: {
    filterContacts(state, action) {
      state = action.payload;
    },
  },
});

export const filterReducer = FilterSlice.reducer;

export const { filterContacts } = FilterSlice.actions;
