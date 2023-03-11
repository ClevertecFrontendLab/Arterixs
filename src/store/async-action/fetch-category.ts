import { Dispatch } from 'react';
import { AnyAction } from 'redux';
import { actionCategoryBook, actionErrorLoadCategory } from '../actions/action-creaters';
import { $api } from '../axios/interception';

export const fetchCategoryBooks = (dispatch: Dispatch<AnyAction>) =>
  $api.get('/categories')
    .then((response) => response.data)
    .then((data) => dispatch(actionCategoryBook(data)))
    .catch(() => {
      dispatch(actionErrorLoadCategory(true));
    });
