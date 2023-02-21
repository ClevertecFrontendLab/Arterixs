import { combineReducers } from 'redux';
import { reducerListBook } from './reducer';
import { reducerCategory } from './reducer-category';
import { reducerGetIdBook } from './reducer-id-book';
import { reducerSortingBooks } from './reducer-sorting';

export const rootReducer = combineReducers({
  listBooks: reducerListBook,
  categoryBooks: reducerCategory,
  bookPage: reducerGetIdBook,
  sortingBooks: reducerSortingBooks
});
