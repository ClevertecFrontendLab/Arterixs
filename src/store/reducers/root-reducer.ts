import { combineReducers } from 'redux';
import { reducerListBook } from './reducer';
import { reducerCategory } from './reducer-category';
import { reducerGetIdBook } from './reducer-id-book';

export const rootReducer = combineReducers({
  listBooks: reducerListBook,
  categoryBooks: reducerCategory,
  bookPage: reducerGetIdBook,
});
