import { useState, useEffect } from 'react';
import { UPGRADE_SEARCH_RESIZE } from './constants';

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
