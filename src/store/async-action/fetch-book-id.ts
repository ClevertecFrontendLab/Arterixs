import { Dispatch } from 'react';
import { AnyAction } from 'redux';
import { actionErrorIdBook, actionGetIdBook } from '../actions/action-creaters';
import { $api } from '../axios/interception';

export const fetchBookId = (dispatch: Dispatch<AnyAction>, id: number) =>
  $api.get(`/books/${id}`)
    .then((response) => response.data)
    .then((data) => dispatch(actionGetIdBook(data)))
    .catch(() => {
      dispatch(actionErrorIdBook(true));
    });
