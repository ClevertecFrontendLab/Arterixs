import { ActionLoad } from '../../types/enum';
import { IResponseState } from '../../types/interface';
import { actionResponse } from '../../types/types';
import { responseState } from '../state/response-state';

export const reducerResponse = (state: IResponseState = responseState, action: actionResponse): IResponseState => {
  switch (action.type) {
    case ActionLoad.RESPONSE:
      return { ...state, isLoaded: action.data };
    case ActionLoad.AUTH:
      return { ...state, auth: action.data };
    case ActionLoad.BODY_AUTH:
      return { ...state, body: action.data };
    default:
      return state;
  }
};
