import { Dispatch } from 'react';
import { AnyAction } from 'redux';
import { actionCategoryBook, actionErrorLoadCategory } from '../actions/action-creaters';

export const fetchCategoryBooks = (dispatch: Dispatch<AnyAction>) =>
  fetch('https://strapi.cleverland.by/api/categories')
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error(`is not ok ${response.status}`);
    })
    .then((json) => dispatch(actionCategoryBook(json)))
    .catch((error) => {
      dispatch(actionErrorLoadCategory(true));
      console.log(error);
    });
