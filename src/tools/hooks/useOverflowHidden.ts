import { useCallback } from 'react';

export const setOverflow = (isActive: boolean) => {
    const body = document.querySelector('body') as HTMLElement;
    body.style.overflow = !isActive ? 'hidden' : '';
};


export const useOverflowHidden = (isActive: boolean) => useCallback(() => setOverflow(isActive), [ isActive ]);
