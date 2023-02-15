import { initialState } from '../initial-state';
import { ActionLoad } from '../../types/enum';
import { IINititalState } from '../../types/interface';
import { actionsType } from '../../types/types';

export const reducer = (state: IINititalState = initialState, action: actionsType): IINititalState => {
  switch(action.type) {
    case ActionLoad.GET_LIST_BOOKS:
      return {...state, listBooks: [...state.listBooks, ...action.data], loadedList: true};
    case ActionLoad.GET_CATEGORY_BOOKS:
      return {...state, categoryBooks: [...state.categoryBooks, ...action.data], loadedCategory: true}
    case ActionLoad.ERROR_LOAD_CATEGORY:
      return {...state, errorLoadCategory: action.data}
    case ActionLoad.ERROR_LOAD_LIST:
      return {...state, errorLoadList: action.data}
    default:
      return state;
  }
}
