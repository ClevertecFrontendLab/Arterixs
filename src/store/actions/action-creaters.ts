import { IListBooks, ICategoryBooks, IDataIdBook, IBodyAuthResponse } from '../../types/interface';
import { ActionLoad } from '../../types/enum';

export const actionListBook = (data: IListBooks) => ({ type: ActionLoad.GET_LIST_BOOKS, data });
export const actionCategoryBook = (data: ICategoryBooks) => ({ type: ActionLoad.GET_CATEGORY_BOOKS, data });
export const actionLoading = (data: true) => ({ type: ActionLoad.LOADING, data });
export const actionErrorLoadCategory = (data: true) => ({ type: ActionLoad.ERROR_LOAD_CATEGORY, data });
export const actionErrorLoadList = (data: true) => ({ type: ActionLoad.ERROR_LOAD_LIST, data });
export const actionErrorIdBook = (data: true) => ({ type: ActionLoad.ERROR_LOAD_ID_BOOK, data });
export const actionGetIdBook = (data: IDataIdBook) => ({ type: ActionLoad.GET_ID_BOOK, data });
export const actionResetStateBooks = (data: false) => ({ type: ActionLoad.RESET_STATE_BOOKS, data });
export const actionResetListBooks = (data: false) => ({ type: ActionLoad.RESET_LOAD_LIST, data });
export const actionResponse = (data: boolean) => ({ type: ActionLoad.RESPONSE, data });
export const actionAuth = (data: boolean) => ({ type: ActionLoad.AUTH, data });
export const actionBody = (data: IBodyAuthResponse | null) => ({ type: ActionLoad.BODY_AUTH, data });
