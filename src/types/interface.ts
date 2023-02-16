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

//TODO: delete
interface IButtonObjectCard {
  content: string;
  disabled: boolean;
  className: string;
}

//TODO: delete
export interface IObjecrCard {
  id: number;
  img: JSX.Element;
  grade: JSX.Element;
  name: string;
  author: string;
  button: IButtonObjectCard;
}

interface IContent {
  one: string;
  two: string;
}

export interface IMeta {
  izd: string;
  year: string;
  pages: string;
  perepel: string;
  format: string;
  genres: string;
  weight: string;
  ISBN: string;
  creater: string;
}

export interface IReview {
  avatar: string;
  name: string;
  date: string;
  comment: string;
}

export interface IReviewer {
  one: IReview;
  two: IReview;
  three: IReview;
}

export interface IJsonData {
  id: number;
  img: boolean;
  grade: boolean;
  name: string;
  author: string;
  button: IButtonObjectCard;
  content: IContent;
  meta: IMeta;
  review: IReviewer;
  amountSlider: number;
  coverArray: string[];
}

export interface ISwiperData {
  amountSlider: number;
  coverArray: string[];
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
  listBooks: IListBooks[] | [],
  categoryBooks: ICategoryBooks[] | [],
  loadedList: boolean,
  loadedCategory: boolean,
  errorLoadList: boolean,
  errorLoadCategory: boolean
}

export interface IListBooks {
  issueYear: string,
  rating: number | null,
  title: string,
  authors: string[],
  image: IImage | null,
  categories: string[],
  id: number,
  booking: IBooking | null,
  delivery: IDelivery | null,
  histories: IHistories[] | null
}

export interface ICategoryBooks {
  name: string,
  path: string,
  id: number,
  func?: () => void;
}

interface IImage {
  url: string
}

export interface IDelivery {
  id: number,
  handed: boolean,
  dateHandedFrom: string,
  dateHandedTo: string,
  recipientId: number,
  recipientFirstName: string,
  recipientLastName: string
}

export interface IBooking {
  id: number,
  order: boolean,
  dateOrder: string,
  customerId: number,
  customerFirstName: string,
  customerLastName: string
}

export interface IHistories {
  id: number,
  userId: number
}

export interface IActionLoaded {
  type: ActionLoad.LOADING,
  data: boolean
}

export interface IErrorLoadList {
  type: ActionLoad.ERROR_LOAD_LIST,
  data: boolean
}

export interface IErrorLoadCategory {
  type: ActionLoad.ERROR_LOAD_CATEGORY,
  data: boolean
}

export interface IActionList {
  type: ActionLoad.GET_LIST_BOOKS
  data: IListBooks[] | []
}

export interface IActionCategory {
  type: ActionLoad.GET_CATEGORY_BOOKS
  data: ICategoryBooks[] | []
}
