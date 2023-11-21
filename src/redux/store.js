import { createStore } from 'redux';
import { devToolsEnhancer } from '@redux-devtools/extension';

const initialState = {
  contacts: [],
  filter: '',
};

const rootreducer = (state = initialState, action) => state;

const enhancer = devToolsEnhancer();

const store = createStore(rootreducer, enhancer);

export default store;
