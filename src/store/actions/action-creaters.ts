import { IListBooks, ICategoryBooks } from '../../types/interface';
import { ActionLoad } from '../../types/enum';

export const actionListBook = (data: IListBooks) => ({type: ActionLoad.GET_LIST_BOOKS, data})
export const actionCategoryBook = (data: ICategoryBooks) => ({type: ActionLoad.GET_CATEGORY_BOOKS, data})
