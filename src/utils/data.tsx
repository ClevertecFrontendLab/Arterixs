import { Stars } from '../components/main-page/stars';
import { AUTHOR_ONE, AUTHOR_TWO, TITLE_BOOK_ONE, TITLE_BOOK_TWO, TITLE_BOOK_THREE } from './constants';
import { FullCard } from '../components/main-page/full-card';
import { EmptyCard } from '../components/main-page/empty-card';
import { Grades } from '../components/main-page/grades';

export const cardContentArray = [
  {
    id: 1,
    img: <EmptyCard />,
    grade: <Stars />,
    name: TITLE_BOOK_ONE,
    author: AUTHOR_ONE,
    button: { content: 'Забронировать', disabled: false, className: 'book__submit' },
  },
  {
    id: 2,
    img: <FullCard />,
    grade: <Stars />,
    name: TITLE_BOOK_TWO,
    author: AUTHOR_ONE,
    button: { content: 'Забронировать', disabled: false, className: 'book__submit' },
  },
  {
    id: 3,
    img: <FullCard />,
    grade: <Stars />,
    name: TITLE_BOOK_THREE,
    author: AUTHOR_ONE,
    button: { content: 'занята до 03.05', disabled: true, className: 'book__submit' },
  },
  {
    id: 4,
    img: <FullCard />,
    grade: <Stars />,
    name: TITLE_BOOK_ONE,
    author: AUTHOR_ONE,
    button: { content: 'Забронировать', disabled: false, className: 'book__submit' },
  },
  {
    id: 5,
    img: <FullCard />,
    grade: <Stars />,
    name: TITLE_BOOK_ONE,
    author: AUTHOR_TWO,
    button: { content: 'Забронирована', disabled: false, className: 'book__submit book__submit_closed' },
  },
  {
    id: 6,
    img: <EmptyCard />,
    grade: <Grades />,
    name: TITLE_BOOK_TWO,
    author: AUTHOR_TWO,
    button: { content: 'занята до 23.04', disabled: true, className: 'book__submit' },
  },
  {
    id: 7,
    img: <FullCard />,
    grade: <Stars />,
    name: TITLE_BOOK_THREE,
    author: AUTHOR_TWO,
    button: { content: 'Забронировать', disabled: false, className: 'book__submit' },
  },
  {
    id: 8,
    img: <FullCard />,
    grade: <Stars />,
    name: TITLE_BOOK_ONE,
    author: AUTHOR_TWO,
    button: { content: 'Забронировать', disabled: false, className: 'book__submit' },
  },
  {
    id: 9,
    img: <FullCard />,
    grade: <Stars />,
    name: TITLE_BOOK_ONE,
    author: AUTHOR_ONE,
    button: { content: 'Забронировать', disabled: false, className: 'book__submit' },
  },
  {
    id: 10,
    img: <EmptyCard />,
    grade: <Stars />,
    name: TITLE_BOOK_ONE,
    author: AUTHOR_ONE,
    button: { content: 'Забронировать', disabled: false, className: 'book__submit' },
  },
];

export const arrayGenres = [
  { id: 1, genres: 'Бизнес-книги', count: '14', url: '/books/business' },
  { id: 2, genres: 'Детективы', count: '8', url: '/books/detectives' },
  { id: 3, genres: 'Детские книги', count: '14', url: '/books/kids' },
  { id: 4, genres: 'Зарубежная литература', count: '2', url: '/books/foreign' },
  { id: 5, genres: 'История', count: '5', url: '/books/jistory' },
  { id: 6, genres: 'Классическая литература', count: '12', url: '/books/classic' },
  { id: 7, genres: 'Книги по психологии', count: '11', url: '/books/psychology' },
  { id: 8, genres: 'Компьютерная литература', count: '54', url: '/books/computer' },
  { id: 9, genres: 'Культура и искусство', count: '5', url: '/books/culture' },
  { id: 10, genres: 'Наука и образование', count: '2', url: '/books/science' },
  { id: 11, genres: 'Публицистическая литература', count: '0', url: '/books/nonfiction' },
  { id: 12, genres: 'Справочники', count: '10', url: '/books/reference' },
  { id: 13, genres: 'Фантастика', count: '12', url: '/books/fantastic' },
  { id: 14, genres: 'Юмористическая литература', count: '8', url: '/books/humor' },
];
