import { useState, useEffect } from 'react';
import { UPGRADE_SEARCH_RESIZE } from './constants';
import { IBooking, IDelivery, IImage } from '../types/interface'

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
  let authorString = ''
  authors.forEach((item, indx, arr) => {
    if (indx + 1 === arr.length) {
      authorString += `${item}`
    } else {
      authorString += `${item} `
    }
  })
  return authorString
}

export const getContentButtonCardBooks = (booking: IBooking | null, delivery: IDelivery | null): string => {
  let contentButton = ''
  if (booking?.dateOrder) {
    contentButton = 'Забронирована'
  } else if (delivery?.handed) {
    contentButton = `Занята до ${delivery.dateHandedTo}`
  } else {
    contentButton = 'Забронировать'
  }
  return contentButton
}

export const getValidIdUrl = (value: string | undefined): number => (value ? Number(value.slice(1)) : 0);

export const converterBooksCover = (images: IImage[]): string[] => {
  const arrayImageURL = images.map((item) => `https://strapi.cleverland.by${item.url}`)
  return arrayImageURL
}

export const convertedDate = (date: string): string => {
  const arrayMonth = [
    'января',
    'февраля',
    'марта',
    'апреля',
    'мая',
    'июня',
    'июля' ,
    'августа',
    'сентября',
    'октября',
    'ноября',
    'декабря'
  ]
  const createDate = new Date(date)
  const day = createDate.getDay()
  const month = createDate.getMonth()
  const year = createDate.getFullYear()
  const result = `${day} ${arrayMonth[month]} ${year}`
  return result
}

