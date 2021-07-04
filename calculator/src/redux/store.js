import { createStore } from 'redux';
import calcReducer from './calcData/calcReducer';

const store = createStore(calcReducer);

export default store;