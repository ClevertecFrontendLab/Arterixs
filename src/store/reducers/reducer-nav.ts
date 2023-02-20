import { ActionLoad } from '../../types/enum';
import { IStateNavigation } from '../../types/interface';
import { actionsNav } from '../../types/types';
import { stateNavigation } from '../state/state-navigation';

export const reducerNavigation = (state: IStateNavigation = stateNavigation, action: actionsNav): IStateNavigation => {
  switch (action.type) {
    case ActionLoad.SET_PATH:
      return { ...state, path: action.data};
    default:
      return state;
  }
};
