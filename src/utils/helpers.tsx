import { useState, useEffect } from 'react';
import { UPGRADE_SEARCH_RESIZE } from './constants';
import { IBooking, IDelivery, IImage } from '../types/interface';

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

export const convertUrlPath = (path: string): string => {
  switch (path) {
    case 'Бизнес':
      return 'business';
    case 'Психология':
      return 'psychology';
    case 'Родителям':
      return 'parents';
    case 'Нон-фикшн':
      return 'non-fiction';
    case 'Художественная литература':
      return 'fiction';
    case 'Программирование':
      return 'programming';
    case 'Хобби':
      return 'hobby';
    case 'Дизайн':
      return 'design';
    case 'Детские':
      return 'childish';
    case 'Другое':
      return 'other';
    default:
      return 'category';
  }
};

export const convertUrlPathReverse = (path: string): string => {
  switch (path) {
    case 'business':
      return 'Бизнес';
    case 'psychology':
      return 'Психология';
    case 'parents':
      return 'Родителям';
    case 'non-fiction':
      return 'Нон-фикшн';
    case 'fiction':
      return 'Художественная литература';
    case 'programming':
      return 'Программирование';
    case 'hobby':
      return 'Хобби';
    case 'design':
      return 'Дизайн';
    case 'childish':
      return 'Детские';
    case 'other':
      return 'Другое';
    default:
      return 'category';
  }
};
