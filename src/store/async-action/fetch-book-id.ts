import { Dispatch } from 'react';
import { AnyAction } from 'redux';
import { actionErrorIdBook, actionGetIdBook } from '../actions/action-creaters';

export const fetchBookId = (dispatch: Dispatch<AnyAction>, id: number) =>
  fetch(`https://strapi.cleverland.by/api/books/${id}`)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error(`is not ok ${response.status}`);
    })
    .then((json) => dispatch(actionGetIdBook(json)))
    .catch((error) => {
      dispatch(actionErrorIdBook(true));
      console.log(error);
    });
