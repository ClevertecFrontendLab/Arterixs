import { Dispatch } from 'react';
import { AnyAction } from 'redux';
import { ActionLoad } from './enum';

export interface IButtonToggle {
  id: number;
  icon: string;
  className: string;
  data: string;
  func: () => void;
  state: boolean;
}

export interface IContentToggle {
  window: () => void;
  list: () => void;
  content: boolean;
}

export interface ISwiperData {
  amountSliderCovers: number;
  amountBooksCover: string[] | [];
}

export interface IAccordeonState {
  stateAccordeon: boolean;
  isActive: boolean;
}

export interface IRecallState {
  toggleStateRecall: () => void;
  stateRecall: boolean;
}

export interface ISearchBut {
  icon: string;
  func: () => void;
  state: boolean;
}

export interface IButtonSearch {
  icon: string;
  func: () => void;
  state: boolean;
}

export interface IBurgerState {
  burgerState: boolean;
  toggleBurgerMenu: () => void;
}

export interface IINititalState {
  list: IListBooks[] | [];
  loaded: boolean;
  error: boolean;
}

export interface IStateCategory {
  category: ICategoryBooks[] | []
  loaded: boolean;
  error: boolean;

}

export interface IStateNavigation {
  path: string
}

export interface IStateBookPage {
  book: null | IDataIdBook;
  loaded: boolean;
  error: boolean;
}

export interface IListBooks {
  issueYear: string;
  rating: number | null;
  title: string;
  authors: string[];
  image: IImage | null;
  categories: string[];
  id: number;
  booking: IBooking | null;
  delivery: IDelivery | null;
  histories: IHistories[] | null;
}

export interface ICategoryBooks {
  name: string;
  path: string;
  id: number;
  disp?: Dispatch<AnyAction>
  func?: () => void
}

export interface IImage {
  url: string;
}

export interface IDelivery {
  id: number;
  handed: boolean;
  dateHandedFrom: string;
  dateHandedTo: string;
  recipientId: number;
  recipientFirstName: string;
  recipientLastName: string;
}

export interface IBooking {
  id: number;
  order: boolean;
  dateOrder: string;
  customerId: number;
  customerFirstName: string;
  customerLastName: string;
}

export interface IHistories {
  id: number;
  userId: number;
}

export interface IActionLoaded {
  type: ActionLoad.LOADING;
  data: true;
}

export interface IErrorLoadList {
  type: ActionLoad.ERROR_LOAD_LIST;
  data: true;
}

export interface IErrorLoadCategory {
  type: ActionLoad.ERROR_LOAD_CATEGORY;
  data: true;
}

export interface IActionResetList {
  type: ActionLoad.RESET_LOAD_LIST;
  data: false
}

export interface IActionList {
  type: ActionLoad.GET_LIST_BOOKS;
  data: IListBooks[] | [];
}

export interface IActionNavigation {
  type: ActionLoad.SET_PATH
  data: string
}

export interface IActionCategory {
  type: ActionLoad.GET_CATEGORY_BOOKS;
  data: ICategoryBooks[] | [];
}

export interface IActionIdBooks {
  type: ActionLoad.GET_ID_BOOK;
  data: IDataIdBook;
}

export interface IActionResetStateBooks {
  type: ActionLoad.RESET_STATE_BOOKS;
  data: false;
}

export interface IActionErrorIdBook {
  type: ActionLoad.ERROR_LOAD_ID_BOOK;
  data: true;
}

export interface IDataIdBook {
  id: number;
  title: string;
  rating: number | null;
  issueYear: string;
  description: string;
  publish: string;
  pages: string;
  cover: string;
  weight: string;
  format: string;
  ISBN: string;
  producer: string;
  authors: string[];
  images: IImage[] | null;
  categories: string[];
  comments: ICommentsMeta[];
  booking: IBooking | null;
  delivery: IDelivery | null;
  histories: IHistories[] | null;
}

export interface ICommentsMeta {
  id: number;
  rating: number;
  text: string;
  createdAt: string;
  user: IUserMetaComments;
}

export interface IUserMetaComments {
  commentUserId: number;
  firstName: string;
  lastName: string;
  avatarUrl: string;
}

export interface IControlLoadedResponse {
  isLoaded: boolean;
  isError: boolean;
}
