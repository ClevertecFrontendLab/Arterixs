import { Dispatch } from 'react'
import { AnyAction } from 'redux'
import { actionListBook } from '../actions/action-creaters'

export const fetchListBooks = (dispatch: Dispatch<AnyAction>) => (
  fetch('https://strapi.cleverland.by/api/books')
    .then(response => response.json())
    .then(json => dispatch(actionListBook(json)))
    .catch(error => console.log(error))
)

