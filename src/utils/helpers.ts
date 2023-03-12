import { MultipleFieldErrors } from 'react-hook-form';
import { useState, useEffect } from 'react';
import { DEFAULT_PATH_BREAD, UPGRADE_SEARCH_RESIZE } from './constants';
import { IBooking, ICategoryBooks, IDelivery, IImage, IListBooks } from '../types/interface';

export const typeGuardArray = <T>(argument: T | undefined | null): T => {
  if (argument === undefined || argument === null) {
    throw new TypeError('This value was promised to be there.');
  }
  return argument;
};

export const useResize = () => {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return width <= UPGRADE_SEARCH_RESIZE;
};

export const getAuthorString = (authors: string[]): string => {
  let authorString = '';
  authors.forEach((item, indx, arr) => {
    if (indx + 1 === arr.length) {
      authorString += `${item}`;
    } else {
      authorString += `${item} `;
    }
  });
  return authorString;
};

const convertDateDelivery = (date: string) => {
  const createDate = new Date(date);
  let resultDay = '';
  let resultMonth = '';
  const day = createDate.getDay();
  const month = createDate.getMonth();
  if (day < 10) {
    resultDay = `0${day}`;
  } else {
    resultDay = `${day}`;
  }
  if (month < 10) {
    resultMonth = `0${month}`;
  } else {
    resultMonth = `${month}`;
  }
  const result = `${resultDay}.${resultMonth}`;
  return result;
};

export const getContentButtonCardBooks = (booking: IBooking | null, delivery: IDelivery | null): string => {
  let contentButton = '';
  if (booking?.dateOrder) {
    contentButton = 'Забронирована';
  } else if (delivery?.handed) {
    contentButton = `Занята до ${convertDateDelivery(delivery.dateHandedTo)}`;
  } else {
    contentButton = 'Забронировать';
  }
  return contentButton;
};

export const getValidIdUrl = (value: string | undefined): number => (value ? Number(value) : 0);

export const converterBooksCover = (images: IImage[]): string[] => {
  const arrayImageURL = images.map((item) => `https://strapi.cleverland.by${item.url}`);
  return arrayImageURL;
};

export const convertedDate = (date: string): string => {
  const arrayMonth = [
    'января',
    'февраля',
    'марта',
    'апреля',
    'мая',
    'июня',
    'июля',
    'августа',
    'сентября',
    'октября',
    'ноября',
    'декабря',
  ];
  const createDate = new Date(date);
  const day = createDate.getDay();
  const month = createDate.getMonth();
  const year = createDate.getFullYear();
  const result = `${day} ${arrayMonth[month]} ${year}`;
  return result;
};

export const getValidUrlCategory = (path: string | undefined): string => (path ? path : 'all');

export const searchCategoryBreadLink = (url: string, categoryState: ICategoryBooks[] | []) => {
  if (url === 'all') {
    return DEFAULT_PATH_BREAD;
  }
  if (categoryState.length) {
    const search = typeGuardArray(categoryState.find((item) => item.path === url));
    const pathName = search.name;
    return pathName;
  }
  return DEFAULT_PATH_BREAD;
};

export const sortingBooksInCategory = (arrayBooks: IListBooks[], category: string = DEFAULT_PATH_BREAD) => {
  if (category === DEFAULT_PATH_BREAD) {
    return arrayBooks;
  }
  const arrayCategory = arrayBooks.filter((item) => {
    const targetCategory = item.categories.find((item) => item === category);
    return targetCategory === category;
  });
  return arrayCategory;
};

export const getAmountBooks = (genresState: IListBooks[] | [], name: string) => {
  const arrBooksInCategory = genresState.map((item) => item.categories.filter((item) => item === name)).flat();
  return arrBooksInCategory;
};

export const convertNull = (value: number | null) => {
  if (value === null) {
    return 0;
  }
  return value;
};

export const sortingBooksInRating = (genresState: IListBooks[] | [], flag: boolean) => {
  const copyArray = genresState.slice();
  if (flag) {
    copyArray.sort((a, b) => convertNull(a.rating) - convertNull(b.rating));
  } else {
    copyArray.sort((a, b) => convertNull(b.rating) - convertNull(a.rating));
  }
  return copyArray;
};

export const switchStep = (step: number) => {
  switch (step) {
    case 1:
      return {
        typeInputUp: 'text',
        placeholderInputUp: 'Придумайте логин для входа',
        helpsInputUp: 'Используйте для логина латинский алфавит и цифры',
        typeInputDown: 'password',
        placeholderInputDown: 'Пароль',
        helpsInputDown: 'Пароль не менее 8 символов, с заглавной буквой и цифрой',
        textButton: 'следующий шаг',
        requaredNameUp: 'username',
        requaredNameDown: 'password',
        rulesUp: {
          required: true,
          validate: {
            isNumber: (value: string) => /[0-9]+/gi.test(value),
            isLetter: (value: string) => /^[0-9A-Za-z]+$/g.test(value),
          },
        },
        rulesDown: {
          required: true,
          minLength: 8,
          validate: {
            isNumber: (value: string) => /[0-9]+/gi.test(value),
            isLetter: (value: string) => /[A-ZА-ЯЁ]+/g.test(value),
          },
        },
      };
    case 2:
      return {
        typeInputUp: 'text',
        placeholderInputUp: 'Имя',
        helpsInputUp: '',
        typeInputDown: 'text',
        placeholderInputDown: 'Фамилия',
        helpsInputDown: '',
        textButton: 'последний шаг',
        requaredNameUp: 'firstName',
        requaredNameDown: 'lastName',
        rulesUp: {
          required: {
            value: true,
            message: 'Поле не может быть пустым',
          },
        },
        rulesDown: {
          required: {
            value: true,
            message: 'Поле не может быть пустым',
          },
        },
      };
    case 3:
      return {
        typeInputUp: 'tel',
        placeholderInputUp: 'Номер телефона',
        helpsInputUp: 'В формате +375 (xx) xxx-xx-xx ',
        typeInputDown: 'email',
        placeholderInputDown: 'E-mail',
        helpsInputDown: '',
        textButton: 'зарегистрироваться',
        requaredNameUp: 'phone',
        requaredNameDown: 'email',
        rulesUp: {
          required: {
            value: true,
            message: 'Поле не может быть пустым',
          },
          pattern: {
            value: /^\+375\s\((25|29|33|44)\)\s\d{3}(-\d{2}){2}$/,
            message: 'В формате +375 (xx) xxx-xx-xx'
          }
        },
        rulesDown: {
          required: {
            value: true,
            message: 'Поле не может быть пустым',
          },
          pattern: {
            value: /^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$/,
            message: 'Введите корректный e-mail',
          },
        },
      };
    default:
      return {
        typeInputUp: '',
        placeholderInputUp: '',
        helpsInputUp: '',
        typeInputDown: '',
        placeholderInputDown: '',
        helpsInputDown: '',
        textButton: '',
        requaredNameUp: 'phone',
        requaredNameDown: 'email',
        rulesUp: {
          required: true,
          pattern: /^[a-zA-Z](?=.*\d)[a-zA-Z0-9-_.]+$/,
        },
        rulesDown: {
          required: true,
          minLength: 8,
          pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$/,
        },
      };
  }
};

export const getTypeInput = (eye: boolean) => (eye ? 'text' : 'password');

export const getNameFormReg = (name: string) => {
  switch (name) {
    case 'email':
      return name;
    case 'password':
      return name;
    case 'username':
      return name;
    case 'firstName':
      return name;
    case 'lastName':
      return name;
    case 'phone':
      return name;
    default:
      return 'email';
  }
};

export const getValidObj = (value: MultipleFieldErrors | undefined) => (value ? value : {});
