import { Dispatch } from 'react'
import { AnyAction } from 'redux'
import { actionCategoryBook, actionErrorLoadCategory } from '../actions/action-creaters'

export const fetchCategoryBooks = (dispatch: Dispatch<AnyAction>) => (
  fetch('https://strapi.cleverland.by/api/categories')
    .then(response => response.json())
    .then(json => dispatch(actionCategoryBook(json)))
    .catch(error => {
      dispatch(actionErrorLoadCategory(true))
      console.log(error)
    })
)

