import { rootReducer } from '../store/reducers/root-reducer';
import { IActionCategory, IActionErrorIdBook, IActionResetStateBooks, IActionIdBooks, IActionList, IActionLoaded, IControlLoadedResponse, IErrorLoadCategory, IErrorLoadList, IDataIdBook } from './interface';

export type actionsType = IActionList | IActionCategory | IActionLoaded | IErrorLoadCategory | IErrorLoadList
export type actionsGetIdBook = IActionIdBooks | IActionErrorIdBook | IActionResetStateBooks
export type propsErrorState = Omit<IControlLoadedResponse, 'isLoaded'>
export type propsMetaData = Pick<IDataIdBook, 'issueYear' | 'publish' | 'pages' | 'cover' |'weight' | 'format' | 'ISBN' | 'producer' | 'categories'>
export type rootState = ReturnType<typeof rootReducer>
