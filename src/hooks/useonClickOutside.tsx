import { RefObject, useEffect } from 'react';

export const useOnClickOutside = (ref: RefObject<HTMLDivElement>, handler: () => void): void => {
  const handleClickOutside = (e: MouseEvent): void => {
    if (ref && ref.current && e.target !== ref.current && !ref.current.contains(e.target as Node)) {
      handler();
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);

    return (): void => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  });
};
