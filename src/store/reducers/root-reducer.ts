import { combineReducers } from 'redux';
import { reducerListBook } from './reducer';
import { reducerCategory } from './reducer-category';
import { reducerGetIdBook } from './reducer-id-book';
import { reducerResponse } from './reducer-response';

export const rootReducer = combineReducers({
  listBooks: reducerListBook,
  categoryBooks: reducerCategory,
  bookPage: reducerGetIdBook,
  response: reducerResponse,
});
