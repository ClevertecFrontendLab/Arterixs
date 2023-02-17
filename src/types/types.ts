import { rootReducer } from '../store/reducers/root-reducer';
import { IActionCategory, IActionErrorIdBook, IActionResetStateBooks, IActionIdBooks, IActionList, IActionLoaded, IControlLoadedResponse, IErrorLoadCategory, IErrorLoadList } from './interface';

export type actionsType = IActionList | IActionCategory | IActionLoaded | IErrorLoadCategory | IErrorLoadList
export type actionsGetIdBook = IActionIdBooks | IActionErrorIdBook | IActionResetStateBooks
export type propsErrorState = Omit<IControlLoadedResponse, 'isLoaded'>
export type rootState = ReturnType<typeof rootReducer>
