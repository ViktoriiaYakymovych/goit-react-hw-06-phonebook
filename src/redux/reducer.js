import { combineReducers } from 'redux';

const contactsInitialState = [
  { id: 'id-1', name: 'Bob', number: '459-12-56' },
  { id: 'id-2', name: 'Gary', number: '443-89-12' },
  { id: 'id-3', name: 'Helen', number: '645-17-79' },
  { id: 'id-4', name: 'Ann', number: '227-91-26' },
];

const contactsReducer = (state = contactsInitialState, action) => {
  switch (action.type) {
    case 'contacts/addContact': {
      return [...state, action.payload];
    }
    case 'contacts/deleteContact':
      return state.filter(contact => contact.id !== action.payload);
    default:
      return state;
  }
};

const filterReducer = (state = '', action) => {
    switch (action.type) {
        case 'contacts/filterContacts':
            // console.log(action.payload);
            return state = action.payload;
        default:
  return state;}
};

export const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});
