import { rootReducer } from '../store/reducers/root-reducer';
import {
  IActionCategory,
  IActionErrorIdBook,
  IActionResetStateBooks,
  IActionIdBooks,
  IActionList,
  IActionLoaded,
  IControlLoadedResponse,
  IErrorLoadCategory,
  IErrorLoadList,
  IDataIdBook,
  IActionNavigation,
  IListBooks,
  IActionResetList,
  ICategoryBooks,
  IGenresProp,
  IActionSortingBooks,
  IActionSortingRating,
} from './interface';

export type actionsType = IActionList | IActionLoaded | IErrorLoadList | IActionResetList;
export type actionsNav = IActionNavigation
export type actionSortingBook = IActionSortingBooks | IActionSortingRating
export type actionsCategory = IActionCategory | IErrorLoadCategory
export type actionsGetIdBook = IActionIdBooks | IActionErrorIdBook | IActionResetStateBooks;
export type propsErrorState = Omit<IControlLoadedResponse, 'isLoaded'>;
export type propsMetaData = Pick<IDataIdBook,
  'issueYear' |
  'publish' |
  'pages' |
  'cover' |
  'weight' |
  'format' |
  'ISBN' |
  'producer' |
  'categories'
>;
export type rootState = ReturnType<typeof rootReducer>;
export type cardProps = IListBooks & {urlWay: string}
export type genresProps = ICategoryBooks & IGenresProp
