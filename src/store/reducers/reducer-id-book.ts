import { stateBookPage } from '../state/state-book-page';
import { ActionLoad } from '../../types/enum';
import { IStateBookPage } from '../../types/interface';
import { actionsGetIdBook } from '../../types/types';

export const reducerGetIdBook = (state: IStateBookPage = stateBookPage, action: actionsGetIdBook): IStateBookPage => {
  switch (action.type) {
    case ActionLoad.GET_ID_BOOK:
      return { ...state, dataIdBook: action.data, loadedIdBook: true };
    case ActionLoad.ERROR_LOAD_ID_BOOK:
      return { ...state, errorIdBook: action.data };
    case ActionLoad.RESET_STATE_BOOKS:
      return { ...state, loadedIdBook: action.data, errorIdBook: action.data };
    default:
      return state;
  }
};
