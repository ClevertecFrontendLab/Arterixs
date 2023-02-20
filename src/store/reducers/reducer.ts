import { initialState } from '../state/initial-state';
import { ActionLoad } from '../../types/enum';
import { IINititalState } from '../../types/interface';
import { actionsType } from '../../types/types';

export const reducerListBook = (state: IINititalState = initialState, action: actionsType): IINititalState => {
  switch (action.type) {
    case ActionLoad.GET_LIST_BOOKS:
      return { ...state, list: [...state.list, ...action.data], loaded: true };
    case ActionLoad.ERROR_LOAD_LIST:
      return { ...state, error: action.data };
    default:
      return state;
  }
};
