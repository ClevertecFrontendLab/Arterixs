import { Dispatch } from 'react'
import { AnyAction } from 'redux'
import { actionCategoryBook } from '../actions/action-creaters'

export const fetchCategoryBooks = (dispatch: Dispatch<AnyAction>) => (
  fetch('https://strapi.cleverland.by/api/categories')
    .then(response => response.json())
    .then(json => dispatch(actionCategoryBook(json)))
    .catch(error => console.log(error))
)
