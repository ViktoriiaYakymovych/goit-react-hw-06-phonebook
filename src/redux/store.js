import { configureStore } from '@reduxjs/toolkit';

import { contactsReducer } from './contactsSlice';
import { filterReducer } from './filterSlice';

export const store = configureStore({
  reducer: { contacts: contactsReducer, filter: filterReducer },
});

// import { configureStore } from '@reduxjs/toolkit';
// import { persistStore, persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';

// import { contactsReducer } from './contactsSlice';
// import { filterReducer } from './filterSlice';

// const persistConfig = {
//   key: 'root',
//   storage,
// };

// const persistedcontactsReducer = persistReducer(persistConfig, contactsReducer);

// export const store = configureStore({
//   reducer: { contacts: persistedcontactsReducer, filter: filterReducer },
// });

// export const persistior = persistStore(store);
