import { stateBookPage } from '../state/state-book-page';
import { ActionLoad } from '../../types/enum';
import { IStateBookPage } from '../../types/interface';
import { actionsGetIdBook } from '../../types/types';

export const reducerGetIdBook = (state: IStateBookPage = stateBookPage, action: actionsGetIdBook): IStateBookPage => {
  switch (action.type) {
    case ActionLoad.GET_ID_BOOK:
      return { ...state, book: action.data, loaded: true };
    case ActionLoad.ERROR_LOAD_ID_BOOK:
      return { ...state, error: action.data };
    case ActionLoad.RESET_STATE_BOOKS:
      return { ...state, book: null, loaded: action.data, error: action.data };
    default:
      return state;
  }
};
