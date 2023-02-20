import { ActionLoad } from '../../types/enum';
import { IStateCategory } from '../../types/interface';
import { actionsCategory } from '../../types/types';
import { stateCategory } from '../state/state-category';

export const reducerCategory = (state: IStateCategory = stateCategory, action: actionsCategory): IStateCategory => {
  switch (action.type) {
    case ActionLoad.GET_CATEGORY_BOOKS:
      return { ...state, category: [...state.category, ...action.data], loaded: true };
    case ActionLoad.ERROR_LOAD_CATEGORY:
      return { ...state, error: action.data };
    default:
      return state;
  }
};
