import { ActionLoad } from '../../types/enum';
import { IStateSorting } from '../../types/interface';
import { actionSortingBook } from '../../types/types';
import { sortingState } from '../state/sorting-state';

export const reducerSortingBooks = (state: IStateSorting = sortingState, action: actionSortingBook): IStateSorting => {
  switch (action.type) {
    case ActionLoad.SORTING_BOOKS:
      return { ...state, bookSortingList: action.data};
    case ActionLoad.SORTING_RATING:
      return {...state, bookSortingRating: action.data}
    default:
      return state;
  }
};
