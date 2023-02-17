import { Dispatch } from 'react'
import { AnyAction } from 'redux'
import { actionErrorLoadList, actionListBook } from '../actions/action-creaters'

export const fetchListBooks = (dispatch: Dispatch<AnyAction>) => (
  fetch('https://strapi.cleverland.by/api/books')
    .then(response => {
      if (response.ok) {
        return response.json()
      }
      throw new Error(`is not ok ${response.status}`)
    })
    .then(json => dispatch(actionListBook(json)))
    .catch(error => {
      dispatch(actionErrorLoadList(true))
      console.log(error)
    })
)

