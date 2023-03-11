import { Dispatch } from 'react';
import { AnyAction } from 'redux';
import { actionErrorLoadList, actionListBook } from '../actions/action-creaters';
import { $api } from '../axios/interception';

export const fetchListBooks = (dispatch: Dispatch<AnyAction>) =>
  $api.get('/books')
    .then((response) => response.data)
    .then((data) => dispatch(actionListBook(data)))
    .catch(() => {
      dispatch(actionErrorLoadList(true));
    });
