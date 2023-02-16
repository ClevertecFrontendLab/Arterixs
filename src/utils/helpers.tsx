import { useState, useEffect } from 'react';
import { UPGRADE_SEARCH_RESIZE } from './constants';
import { IBooking, IDelivery } from '../types/interface'

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

