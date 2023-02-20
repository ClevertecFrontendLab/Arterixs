import { combineReducers } from 'redux';
import { reducerListBook } from './reducer';
import { reducerCategory } from './reducer-category';
import { reducerGetIdBook } from './reducer-id-book';
import { reducerNavigation } from './reducer-nav';

export const rootReducer = combineReducers({
  listBooks: reducerListBook,
  categoryBooks: reducerCategory,
  bookPage: reducerGetIdBook,
  navigation: reducerNavigation
});
