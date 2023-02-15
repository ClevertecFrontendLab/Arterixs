import { IListBooks, ICategoryBooks } from '../../types/interface';
import { ActionLoad } from '../../types/enum';

export const actionListBook = (data: IListBooks) => ({type: ActionLoad.GET_LIST_BOOKS, data})
export const actionCategoryBook = (data: ICategoryBooks) => ({type: ActionLoad.GET_CATEGORY_BOOKS, data})
export const actionLoading = (data: boolean) => ({type: ActionLoad.LOADING, data})
export const actionErrorLoadCategory = (data: boolean) => ({type: ActionLoad.ERROR_LOAD_CATEGORY, data})
export const actionErrorLoadList = (data: boolean) => ({type: ActionLoad.ERROR_LOAD_LIST, data})
