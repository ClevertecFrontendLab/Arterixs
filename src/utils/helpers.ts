import { AnyAction } from 'redux';
import { useState, useEffect, Dispatch } from 'react';
import { DEFAULT_PATH_BREAD, UPGRADE_SEARCH_RESIZE } from './constants';
import { IBooking, ICategoryBooks, IDelivery, IImage, IListBooks } from '../types/interface';
import { actionSortBooks } from '../store/actions/action-creaters';


export const typeGuardArray = <T>(argument: T | undefined | null): T => {
  if (argument === undefined || argument === null) {
    throw new TypeError('This value was promised to be there.');
  }
  return argument;
}

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

export const getContentButtonCardBooks = (booking: IBooking | null, delivery: IDelivery | null): string => {
  let contentButton = '';
  if (booking?.dateOrder) {
    contentButton = 'Забронирована';
  } else if (delivery?.handed) {
    contentButton = `Занята до ${delivery.dateHandedTo}`;
  } else {
    contentButton = 'Забронировать';
  }
  return contentButton;
};

export const getValidIdUrl = (value: string | undefined): number => value ? Number(value) : 0;

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

export const getValidUrlCategory = (path: string | undefined): string => path ? path : 'all'

export const searchCategoryBreadLink = (url: string, categoryState: ICategoryBooks[] | []) => {
  if (url === 'all') {
    return DEFAULT_PATH_BREAD
  }
  if (categoryState.length) {
    const search = typeGuardArray(categoryState.find((item) => item.path === url))
    const pathName= search.name
    return pathName
  }
  return DEFAULT_PATH_BREAD
}

export const sortingBooksInCategory = (arrayBooks: IListBooks[], dispatch: Dispatch<AnyAction>, category: string = DEFAULT_PATH_BREAD) => {
  if (category === DEFAULT_PATH_BREAD) {
    dispatch(actionSortBooks(arrayBooks))
    return
  }
  const arrayCategory = arrayBooks.filter((item) => {
    const targetCategory = item.categories.find((item) => item === category)
    return targetCategory === category
  })
  dispatch(actionSortBooks(arrayCategory))
}

