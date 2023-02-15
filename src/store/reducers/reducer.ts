import { initialState } from '../initial-state';
import { ActionLoad } from '../../types/enum';
import { IINititalState } from '../../types/interface';
import { actionsType } from '../../types/types';

export const reducer = (state: IINititalState = initialState, action: actionsType): IINititalState => {
  switch(action.type) {
    case ActionLoad.GET_LIST_BOOKS:
      return {...state, listBooks: [...state.listBooks, ...action.data]};
    case ActionLoad.GET_CATEGORY_BOOKS:
      return {...state, categoryBooks: [...state.categoryBooks, ...action.data]}
    default:
      return state;
  }
}
