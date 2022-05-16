import { useCallback, useEffect } from 'react';

export function useKeyboard(callback: (event: KeyboardEvent) => void, keys?: string | string[]) {
  const listener = useCallback(
    (event: KeyboardEvent) => {
      if (
        !keys ||
        keys === event.key ||
        (Array.isArray(keys) && keys.some((key) => key === event.key))
      )
        callback(event);
    },
    [callback, keys]
  );

  useEffect(() => {
    document.addEventListener('keydown', listener);
    return () => document.removeEventListener('keydown', listener);
  }, [listener]);
}
