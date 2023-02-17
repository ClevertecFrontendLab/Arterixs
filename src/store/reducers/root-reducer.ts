import { combineReducers } from 'redux';
import { reducer } from './reducer';
import { reducerGetIdBook } from './reducer-id-book';

export const rootReducer = combineReducers({
  loadMainPage: reducer,
  loadBookPage: reducerGetIdBook,
});
