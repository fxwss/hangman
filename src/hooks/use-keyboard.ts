import { useCallback, useEffect } from "react";

type KeyboardConfig = Partial<{
  transformer: (event: KeyboardEvent) => string;
  acceptableKeys: string[];
}>;

export function useKeyboard(
  callback: (event: KeyboardEvent, transformedKey: string) => void,
  config: KeyboardConfig = {}
) {
  const listener = useCallback(
    (event: KeyboardEvent) => {
      if (
        config?.acceptableKeys &&
        !config.acceptableKeys.includes(event.key)
      ) {
        return;
      }

      callback(event, config.transformer?.(event) ?? event.key);
    },
    [callback, config]
  );

  useEffect(() => {
    window.addEventListener("keypress", listener);
    return () => window.removeEventListener("keypress", listener);
  }, [listener]);
}
