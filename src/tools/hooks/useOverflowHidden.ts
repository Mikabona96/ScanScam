import { useCallback } from 'react';

export const setOverflow = (isModalActive: boolean) => {
    const body = document.querySelector('body') as HTMLElement;
    body.style.overflow = !isModalActive ? 'hidden' : '';
};


export const useOverflowHidden = (isModalActive: boolean) => useCallback(() => setOverflow(isModalActive), [ isModalActive ]);
